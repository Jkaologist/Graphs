const shortestPath = (edges, nodeA, nodeB) => {
  const graph = makeGraph(edges)
  const visited = new Set([nodeA])
  const queue = [[nodeA, 0]]

  while (queue.length > 0) {
    const [node, dist] = queue.shift()
    if (node === nodeB) {
      return dist
    }
    for (let neighbor of graph[node]) {
      if (!(visited.has(neighbor))) {
        visited.add(neighbor)
        queue.push([neighbor, dist + 1])
      }
    }
  }

  return -1
}

const edges = [
  ['w','x'],
  ['x','y'],
  ['z','y'],
  ['z','v'],
  ['w','v'],
]

const makeGraph = (edges) => {
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

console.log(shortestPath(edges, 'w', 'x')) // 1
console.log(shortestPath(edges, 'w', 'z')) // 2
console.log(shortestPath(edges, 'w', 'xyz')) // -1