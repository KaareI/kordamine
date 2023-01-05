
class Human{
    constructor(){
        this.gender = "male"
    }
    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human{
    constructor(){
        super()
        this.name = "Kertu"
        this.gender = "female"
    }
    printName(){
        console.log(this.name)
    }
}

const person = new Person()
console.log(person)
person.printName()
person.printGender()