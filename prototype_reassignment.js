function Test() {
  this.test = true
}

let test1 = new Test()

Test.prototype.age = 0

Test.prototype = {
  constructor: Test,
  age: 1
}

let test2 = new Test()

test1.age < test2.age // -> 1 < 2 -> true
// so test1.age is still accessible, cool
