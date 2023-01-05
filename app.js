const numbers = [1, 2, 3]
const [a, , b] = numbers;
console.log(a, b)

const person ={
    name: "Kertu",
    age: 25
}

const {name}=person;
const {age}=person;
console.log(name);
console.log(age);

const printName = ([name]) => console.log(name)

printName(person);