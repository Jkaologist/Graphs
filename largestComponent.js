/**
  *  function with input(s): graph
  *  output(s): size (count of nodes in graph) of largest component
  */
const largestComponent = (graph) => {
  const visited = new Set()
  let longest = 0
  for (let node in graph) {
    const newSize = getSize(graph, node, visited)
    // if (newSize > longest) longest = newSize
    longest = Math.max(longest, newSize)
  }
  return longest
}

const getSize = (graph, current, visited) => {
  if (visited.has(String(current))) return 0
  
  visited.add(String(current))

  let size = 1
  
  for (let neighbor of graph[current]) {
    size += getSize(graph, neighbor, visited)
  }

  return size
}

const graph = {
  0: [8,1,5],
  1: [0],
  5: [0,8],
  8: [0,5],
  2: [3,4],
  3: [2,4],
  4: [3,2],
}

console.log(largestComponent(graph)) // 4