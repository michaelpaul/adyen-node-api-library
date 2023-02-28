// deps='octokit @actions/core'; npm install -g $deps && npm link $deps
// node --test .github/scripts/
const test = require('node:test');
const assert = require('node:assert/strict');
const { Octokit } = require("octokit");
const core = require("@actions/core");
const release = require('./release.js');

const github = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const context = {
  repo: {
    owner: 'Adyen',
    repo: 'adyen-java-api-library',
  }
};

const comparisonFixture = {
  "repository": {
    "name": "adyen-node-api-library",
    "ref": {
      "compare": {
        "aheadBy": 8,
        "commits": {
          "edges": [
            {
              "node": {
                "message": "Fixing the constructor",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "labels": {
                          "nodes": [
                            {
                              "name": "Fix"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Upgrade some service",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "labels": {
                          "nodes": [
                            {
                              "name": "Breaking change"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "message": "Update CODEOWNERS (#965)",
                "associatedPullRequests": {
                  "edges": [
                    {
                      "node": {
                        "labels": {
                          "nodes": []
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
};

test('Detect changes', async (t) => {
  await t.test('Major', async t => {
    t.mock.method(github, 'graphql', () => comparisonFixture);

    const ver = await release.detectChanges(github, context);

    assert.strictEqual(ver, 'major');
  });

  await t.test('Zero changes', async t => {
    let sync = structuredClone(comparisonFixture);
    sync.repository.ref.compare.aheadBy = 0;
    t.mock.method(github, 'graphql', () => sync);

    const ver = await release.detectChanges(github, context);

    assert.strictEqual(ver, '');
  });

  await t.test('No labels', async t => {
    let noLabels = structuredClone(comparisonFixture);
    for (const edge of noLabels.repository.ref.compare.commits.edges) {
      for (const prs of edge.node.associatedPullRequests.edges) {
        prs.node.labels.nodes = [];
      }
    }
    t.mock.method(github, 'graphql', () => noLabels);

    const ver = await release.detectChanges(github, context);

    assert.strictEqual(ver, 'patch', 'Simple changelog should be a patch');
  });
});

test('Node.js package version', async (t) => {
  const version = await release.packageVersion();

  assert.ok(version);
});

test('Get next version', async (t) => {
  await t.test('Major', async (t) => {
    const ver = await release.nextVersion('13.1.2', 'major');

    assert.strictEqual(ver, '14.0.0');
  });

  await t.test('Minor', async (t) => {
    const ver = await release.nextVersion('13.1.2', 'minor');

    assert.strictEqual(ver, '13.2.0');
  });

  await t.test('Patch', async (t) => {
    const ver = await release.nextVersion('13.1.2', 'patch');

    assert.strictEqual(ver, '13.1.3');
  });

  await t.test('Unchanged', async (t) => {
    const ver = await release.nextVersion('1.2.3', '');

    assert.strictEqual(ver, '1.2.3');
  });
});

test('Compare branches', async (t) => {
  t.mock.method(github, 'graphql', () => comparisonFixture);
  const diff = await release.compareBranches(github, {
    owner: 'Adyen',
    repo: 'adyen-node-api-library',
    base: 'main',
    head: 'develop',
  });

  assert.strictEqual('adyen-node-api-library', diff.repository.name);
});

test('Bump', async (t) => {
  t.mock.method(github, 'graphql', () => comparisonFixture);
  t.mock.method(core, 'setOutput', t.mock.fn());
  const currentVersion = () => '1.2.3';
  const options = { github, context, core, getCurrentVersion: currentVersion };

  await release.bump(options);

  assert.strictEqual(core.setOutput.mock.calls.length, 2);
});