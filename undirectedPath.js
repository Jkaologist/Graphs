const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB)
}

const hasPath = (graph, source, destination, visited = new Set()) => {
  if (source === destination) return true
  if (visited.has(source)) return false

  visited.add(source)

  for (let neighbor of graph[source]) {
    if (hasPath(graph, neighbor, destination, visited)) return true
  }

  return false
}

const buildGraph = (edges) => {
  const graph = {}
  for (let edge of edges) {
    const [ a, b ] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]

console.log(buildGraph(edges))
/**
{
  i: [ 'j', 'k' ],
  j: [ 'i' ],
  k: [ 'i', 'm', 'l' ],
  m: [ 'k' ],
  l: [ 'k' ],
  o: [ 'n' ],
  n: [ 'o' ]
}
*/

console.log(undirectedPath(edges, 'i', 'n')) // false
console.log(undirectedPath(edges, 'i', 'l')) // true
console.log(undirectedPath(edges, 'i', 'o')) // false