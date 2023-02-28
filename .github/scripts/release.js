// Get the current version of a Node.js package
exports.packageVersion = () => {
  return require('../../package.json').version;
};

// Next semantic version number
exports.nextVersion = (current, increment) => {
  let [major, minor, patch] = current.split('.');
  switch (increment) {
    case 'patch':
      patch++;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
  }
  return [major, minor, patch].join('.');
};

// Compare two branches on Github
exports.compareBranches = async (github, { owner, repo, base, head }) => {
  return await github.graphql(`
    query($owner: String!, $repo: String!, $base: String!, $head: String!) {
        repository(owner: $owner, name: $repo) {
          id
          name
          ref(qualifiedName: $base) {
            compare(headRef: $head) {
              aheadBy
              commits(first: 100) {
                edges {
                  node {
                    message
                    associatedPullRequests(first: 5) {
                      edges {
                        node {
                          labels(first: 5) {
                            nodes {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    } 
    `, { owner, repo, base, head });
}

// Scan the changelog to decide what kind of release we need
exports.detectChanges = async (github, context) => {
  const result = await this.compareBranches(github, {
    owner: context.repo.owner,
    repo: context.repo.repo,
    base: 'main',
    head: 'develop',
  });

  if (!result || result.repository.ref.compare.aheadBy < 1) {
    // Nothing to release
    return '';
  }

  let increment = 'patch';

  // increment based on the merged PR labels  
  for (const { node: { associatedPullRequests: prs } } of result.repository.ref.compare.commits.edges) {
    for (const { node: { labels: { nodes: labels } } } of prs.edges) {
      for (const { name: label } of labels) {
        const normalizedLabel = label.toLowerCase().replace(' ', '-');
        switch (normalizedLabel) {
          case 'feature':
            increment = 'minor';
            break;
          case 'breaking-change':
            increment = 'major';
            break;
        }
      }
    }
  }

  return increment;
};

// Define next release
exports.bump = async ({ github, context, core, getCurrentVersion }) => {
  const increment = await this.detectChanges(github, context);
  const nextVersion = this.nextVersion(getCurrentVersion(), increment);

  core.setOutput('increment', increment);
  core.setOutput('nextVersion', nextVersion);
};