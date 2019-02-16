const greet = ({ name }) => `Hello, ${name}!`

const drew = {
  nmae: 'Drew',
  age: 33
}

greet(drew) // -> ???


// 2. add type & annotations & find error earlier
/*
type Person = {
  name: string,
  age: number
}

const greet = ({ name }: Person) => `Hello, ${name}!`

const drew: Person = {
  nmae: 'Drew',
  age: 33
}

greet()
*/


// 3. Array of people

/*
const greet = ({ name }) => `Hello, ${name}!`

const people = [
  { name: 'Fry', age: 24 },
  { name: 'Leela', age: 27 }
]

const drew = people.find(x => x.name === 'Drew')
greet(drew)

/*


// 2. Missing property




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

