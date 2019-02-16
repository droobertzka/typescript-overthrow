
let drew = true
drew = 'Drew'
drew = { name: drew }
drew.age = '33'

let oldAge = drew.age * 2 + '' // -> String: '66'
let fortyTwo = '22' * '2' - 2 // -> Number: 42

const anon = { name: '', age: 0 }
const isAnon = person => !person.name && !person.age

isAnon(anon) // -> Boolean: true
isAnon({ name: 'Stuey', age: 0 }) // -> Boolean: false


const timeTravel = person => ({
  ...person,
  age: person.age * 2 + ''
})

const olderDrew = timeTravel(drew) // -> ???



// 1. Unexpected output
/*
const greet = ({ name }) => `Hello, ${name}!`

const drew = {
  nmae: 'Drew',
  age: 33
}

greet(drew) // -> ???
*/


// 2. error
 
const greet = ({ name }) => `Hello, ${name}!`

const people = [
  { name: 'Fry', age: 24 },
  { name: 'Leela', age: 27 }
]

const drew = people.find(x => x.name === 'Drew')
greet(drew) // -> ???

/*
var add = function(x, y) {
    return parseInt(x + y, 10)
}

var first = add(1, 2)
console.log('result 1', first)

var add = function (x, y) {
    return '' + 1 + '' + 2
}

var second = add(1, 2)
console.log('result 2', second)
*/
