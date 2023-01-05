import person from "./person.js";
import pers from "./person.js";

import { cleanOutput as clean} from "./mingi.js";
import { data } from "./mingi.js";
import * as utils from "./mingi.js";

console.log(person);
console.log(pers);
clean();
console.log(data);
console.log(utils);
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

const person2 = {
    name: "Kertu",
    age: 26
}

console.log(person2);
console.log(person2.age);
console.log(person2.name);

const multiply =  number => {
return number * number
}

console.log(multiply(3))

const callMe = (nimi) => {
    console.log(nimi);
} 