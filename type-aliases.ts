// type aliases
let sum:(x: number,y: number) => number 
            = (x: number, y:number) => x + y

const sumResult = sum(1,2)
console.log(sumResult)

type TwoNumberType = (x: number,y: number) => number 
let minu:TwoNumberType = (x:number, y:number) => (x > y) ? x - y : y - x
const minuResult = minu(4,2)
console.log(minuResult)

type NumberOrStringType = number | string
let num:NumberOrStringType = 1
let str:NumberOrStringType = 'haha'