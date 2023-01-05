/*const numbers =[1, 2, 3];

console.log(numbers);

const newNumbers = [...numbers, 4]
console.log(newNumbers);*/

/*const person ={
    name: "Kertu"
}

const newPerson ={
    ...person,
    age: 25
}*/

const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(args 1, 2, 3, 4))