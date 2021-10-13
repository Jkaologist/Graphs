
var RandomizedSet = function() {
  this.set = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.set.indexOf(val) === -1) {
    this.set.push(val)
    return true
  }
  return false
};
/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.set.indexOf(val) === -1) {
    return false
  }
  [this.set[this.set.indexOf(val)], this.set[this.set.length - 1]] = [this.set[this.set.length - 1], this.set[this.set.indexOf(val)]]
  this.set.pop()
  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let randomIdx = Math.floor(Math.random() * this.set.length)
  return this.set[randomIdx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
console.log(obj)
console.log(obj.insert(5)) // true
console.log(obj.remove(5)) // true
console.log(obj.insert(1)) // true 
console.log(obj.insert(2)) // true
console.log(obj.insert(3)) // true
console.log(obj.insert(99)) // true
console.log(obj.insert(105)) // true
console.log(obj.insert(3)) // false
console.log(obj.remove(100)) // false
console.log(obj)
console.log(obj.getRandom()) // random 1-3
