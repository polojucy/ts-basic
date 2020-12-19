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
