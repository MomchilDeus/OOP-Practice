// Create a random integer, given a number
const randomInt = n => Math.floor(Math.random() * n)

// Human Constructor
function Human(names) {
  this.skinColor = ['light', 'medium', 'dark'][randomInt(3)]
  this.eyeColor = ['common', 'uncommon', 'rare', 'epic', 'legendary'][randomInt(5)]
  this.hair = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'none'][randomInt(6)]
  this.sex = `X${['X', 'Y'][randomInt(2)]}`
  this.name = this.sex == 'XY' ? names.boy : names.girl
  this.agility = randomInt(10) + 1
  this.intellect = randomInt(10) + 1
  this.spirit = randomInt(10) + 1
  this.stamina = randomInt(10) + 1
  this.strength = randomInt(10) + 1
}

Human.prototype = {
  constructor: Human,
  species: 'Homo Sapiens',
  arms: 2,
  legs: 2,
  head: 1,
  aerobic: true,
  immortal: false
}

const person1 = new Human({boy: 'Ryan', girl: 'Aurora'})
const person2 = new Human({boy: 'Aion', girl: 'Nona'})
