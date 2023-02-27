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

test('Bump', async (t) => {
  const ver = await release.bump(github, context);

  assert.strictEqual(ver, 'major');
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

test('Prepare PR', async (t) => {
  t.mock.method(core, 'setOutput', () => { });

  await release.releaseRequest({ github, context, core });

  assert.strictEqual(core.setOutput.mock.calls.length, 2);
});