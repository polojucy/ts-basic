interface Drivable {
    drive(): void
}

class Car implements Drivable{
    drive() {
        console.log("drive a car")
    }
}

class Bicycle implements Drivable {
    drive() {
        console.log("drive the bicycle")
    }
}

const car = new Car()
const bicycle = new Bicycle()
console.log(car.drive())
console.log(bicycle.drive())