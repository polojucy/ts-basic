class Animal {
    protected name: String    
    
    constructor(name: string) {
        this.name = name
    }

    run() {
        return `${this.name} is running...`
    }
}

class Dog extends Animal {
    static colors = ['red','blue','yellow']
    private age: number
    bark() {
        return `${this.name} is barking...`
    }
    getAge() {
        return this.age
    }
}

const cat = new Animal("Cat")
console.log(cat.run())

const dog = new Dog("LaLa")
// extends super method
console.log(dog.run())
console.log(dog.bark())
console.log(dog.getAge())
// static property
Dog.colors.forEach(e => console.log(e))
