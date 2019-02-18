// Complexity of reduce annotations
/*
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T): T;
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: Array<T>) => T, initialValue: T): T;
reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: Array<T>) => U, initialValue: U): U;
// reduce :: ((a, b) -> a) -> a -> [b] -> a 
*/


// 4. Error TS won't find
/*
type Person = { name: string, age: number }
const greet = ({ name }: Person) => `Hello, ${name}!`

const people: Person[] = [
  { name: 'Fry', age: 24 },
  { name: 'Leela', age: 27 }
]

const foundDrew = people.find(x => x.name === 'Drew')
greet(foundDrew)
*/


// 3. Explicitly typed
/*
type Person = { name: string, age: number }

const greet = ({ name }: Person) => `Hello, ${name}!`

const drew: Person = {
  nmae: 'Drew',
  age: 33
}
const people: Person[] = [
  { name: 'Fry', age: 24 },
  { name: 'Leela', age: 27 }
]

const foundDrew = people.find(x => x.nmae === 'Drew')
greet(foundDrew)
*/

// 1. simple misspelling
/*
const greet = ({ name }) => `Hello, ${name}!`

const drew = {
  nmae: 'Drew',
  age: 33
}

greet(drew) // -> ???
*/


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






// Unused stuff:
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

