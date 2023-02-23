exports.bump = async (github) => {
    const result = await github.graphql(`
    {
        repository(owner: "Adyen", name: "adyen-java-api-library") {
          id
          name
          ref(qualifiedName: "main") {
            compare(headRef: "develop") {
              aheadBy
              commits(first: 50) {
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
    `);

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

exports.releaseRequest = async (github, core) => {
  core.setOutput('increment', await this.bump(github));
  core.setOutput('nextVersion', '13.0.0');
};