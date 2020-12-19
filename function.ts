// function
function addFunc(x:number, y:number):number {
    return x + y
}

let result = addFunc(1, 2)


const addFunc2 = (x:number, y:number) => x + y
let addFunc3: (x:number, y:number) => number = addFunc2