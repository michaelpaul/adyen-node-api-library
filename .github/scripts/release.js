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

exports.bump = async (github, context) => {
  const result = await this.compareBranches(github, {
    owner: context.repo.owner,
    repo: context.repo.repo,
    base: 'main',
    head: 'develop',
  });

  if (result.repository.ref.compare.aheadBy < 1) {
    // @todo remove this 
    console.log("Nothing to release");
    return '';
  }

  let increment = 'patch';

  // increment based on the merged PR labels  
  for (const { node: { associatedPullRequests: prs } } of result.repository.ref.compare.commits.edges) {
    for (const { node: { labels: { nodes: labels } } } of prs.edges) {
      for (const { name: label } of labels) {
        switch (label) {
          case 'Feature':
            increment = 'minor';
            break;
          case 'Breaking change':
            increment = 'major';
            break;
        }
      }
    }
  }

  return increment;
};

exports.releaseRequest = async ({ github, context, core }) => {
  core.setOutput('increment', await this.bump(github, context));
  core.setOutput('nextVersion', '13.0.0');
};