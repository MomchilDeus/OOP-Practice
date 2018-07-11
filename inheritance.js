function Human(name) {
  this.name = name
}
Human.prototype.species = 'Homo Sapiens'

function Gamer(name) {
  this.name = name
}
Gamer.prototype = Human.prototype

function Player(name) {
  this.name = name
}
Player.prototype = Object.create(Human.prototype)

let gamer = new Gamer('Nova')
let player = new Player('Wade')

// So far so good
// Now we can modify the prototypes of the children
// Let's start with player

// This works totally fine and is added to the nearest prototype (previously empty)
Player.prototype.games = ['Oasis']

// This would add the games array to Human's prototype, therefore it will be inherited and accessible from player as well
Gamer.prototype.games = ['Starcraft']

/* 
 * This is why the Player approach is better
 * we get an empty object to manipulate as our direct prototype
 */
