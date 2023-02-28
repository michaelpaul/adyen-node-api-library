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

test('Detect changes', async (t) => {
  const ver = await release.detectChanges(github, context);

  assert.strictEqual(ver, 'major');
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
});

test('Compare branches', async (t) => {
  const diff = await release.compareBranches(github, {
    owner: 'Adyen',
    repo: 'adyen-java-api-library',
    base: 'main',
    head: 'develop',
  });

  assert.strictEqual('adyen-java-api-library', diff.repository.name);
});

test('Bump', async (t) => {
  t.mock.method(core, 'setOutput', t.mock.fn());
  const currentVersion = () => '1.2.3';
  const options = { github, context, core, getCurrentVersion: currentVersion };

  await release.bump(options);

  assert.strictEqual(core.setOutput.mock.calls.length, 2);
});