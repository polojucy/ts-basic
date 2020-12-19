// 我们定义了一个接口 Person
interface Person {
    // readonly properties
    readonly id: number;
    name: string;
    age: number;
    // optional properties
    likes ?: [];
}

let somebody: Person = {
    id: 1,
    name: 'jack',
    age: 20
}

somebody.name = 'rose'
somebody.age = 18
// readonly properties don't changed
somebody.id = 2 