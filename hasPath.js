// const dFS = (graph, source, destination) => {
//   let stack = [ source ]
//   while (stack.length > 0) {
//     const current = stack.pop()
//     for (let neighbor of graph[current]) {
//       if (neighbor === destination) return true
//       stack.push(neighbor)
//     }
//   }
//   return false
// }

const bFS = (graph, source, destination) => {
  const queue = [ source ]

  while (queue.length > 0) {
    const current = queue.shift()
    for (let neighbor of graph[current]) {
      if (neighbor === destination) {
        return true
      }
      queue.push(neighbor)
    }
  }
  return false
}

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
}

// console.log(dFS(graph, 'f','k')) // true
// console.log(dFS(graph, 'f','h')) // true
// console.log(dFS(graph, 'h', 'k')) // false

console.log(bFS(graph, 'f','k')) // true
console.log(bFS(graph, 'f','h')) // true
console.log(bFS(graph, 'h', 'k')) // false