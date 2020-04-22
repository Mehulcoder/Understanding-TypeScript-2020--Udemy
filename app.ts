function Logger(hello: Function) {
    console.log("Logging.....")
    console.log(hello)
}

@Logger
class Person {
    name = "Mehul"

    constructor() {
        console.log("Creating the person object")
    }
}

const person = new Person();

console.log(person)