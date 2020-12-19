class Animal {
    name: String
    
    constructor(name: string) {
        this.name = name
    }

    run() {
        return `${this.name} is running...`
    }
}

class Dog extends Animal {
    static colors = ['red','blue','yellow']
    bark() {
        return `${this.name} is barking...`
    }
}

const cat = new Animal("Cat")
console.log(cat.run())

const dog = new Dog("LaLa")
// extends super method
console.log(dog.run())
console.log(dog.bark())
// static property
Dog.colors.forEach(e => console.log(e))
