// A simple class (or 'data type' whatever you will), from Eloquent JavaScript Ch. 6
class Group {
  constructor(group = group) {
    this.group = group
  }
  has(val) { return this.group.includes(val) }
  add(val) { if (!this.group.includes(val)) this.group.push(val) }
  delete(val) { if (this.group.includes(val)) this.group.splice(this.group.indexOf(val), 1) }
  static from(iterable) {
    let group = []
    for (let item of iterable) { group.push(item) }
    return new Group(group)
  }
}

// Complete with its own iterator
Group.prototype[Symbol.iterator] = function() {
  return {
    next: () => {
      return {
        done: !(this.group.length),
        value: this.group.shift()
      }
    }
  }
}
