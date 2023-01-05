console.log("JS REFRESHING");

//let & const

let number = 5
console.log(number);

const numbers=[1, 2, 3];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.length);

numbers.forEach(function(number, index){
    console.log(number + " elemendiga index: " + index)
})

numbers.forEach((number, index) =>{
    console.log(number + " elemendiga index: " + index)
})

const person = {
    name: "Kertu",
    age: 26
}

console.log(person);
console.log(person.age);
console.log(person.name);

const multiply =  number => {
return number * number
}

console.log(multiply(3))

const callMe = (nimi) => {
    console.log(nimi);
} 