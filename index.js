function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  const nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length - 1]
}
function increaseRankBy( n ) {
  const rankedLists = document.querySelectorAll( '.ranked-list' )

  for ( let i = 0, l = rankedLists.length; i < l; i++ ) {
    let children = rankedLists[ i ].children

    for ( let j = 0, k = children.length; j < k; j++ ) {
      children[ j ].innerHTML = parseInt( children[ j ].innerHTML ) + n
    }
  }
}
