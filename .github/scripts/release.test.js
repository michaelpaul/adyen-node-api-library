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

test('Bump Java', async (t) => {
  const ver = await release.bump(github);
  assert.strictEqual(ver, 'major');
});

test('Prepare PR', async (t) => {
  t.mock.method(core, 'setOutput', () => {});

  await release.releaseRequest(github, core);

  assert.strictEqual(core.setOutput.mock.calls.length, 2);
});