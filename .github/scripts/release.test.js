const test = require('node:test');
const assert = require('node:assert/strict');
const { Octokit } = require("octokit");
const release = require('./release.js');

const github = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

test('Bump Java', async (t) => {
  const ver = await release.bump(github);
  assert.strictEqual(ver, 'major');
});

test('Prepare PR', async (t) => {
  const pr = await release.releaseRequest(github);
  assert.deepEqual(pr, {
    increment: 'major',
    nextVersion: '13.0.0'
  });
});