// Dynamic
let drew = true
drew = 'Drew'
drew = { name: drew }
drew.age = '33'

// Implicit Coercion
'33' * 2 + '' // -> String: '66'
'22' * '2' - 2 // -> Number: 42
[1,2,3] + 4 // -> String: '1,2,34'
true / 2 // -> Number: 0.5
false * 8 // -> Number: 0
![].length // -> Boolean: true

const anonymous = { name: '', age: 0 }
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
