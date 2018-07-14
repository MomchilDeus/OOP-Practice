// a simple vector class as a Solution for Eloquent JavaScript Ch. 6
class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vec) {
    return { x: this.x + vec.x, y: this.y + vec.y }
  }

  minus(vec) {
    return { x: this.x - vec.x, y: this.y - vec.y }
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
}
