var permute = function(nums, permutation = []) {
  // base case
  if (nums.length === 0) return [[]]
  const permutations = []
  for (let i = 0; i < nums.length; i++) {
    const rest = nums.filter((val) => nums.indexOf(val) !== i)
    const result = permute(rest, permutation)
    const way = result.map(permutation => [...permutation, nums[i]])
    permutations.push(...way)
  }
  return permutations
};

console.log(permute([1,2,3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]