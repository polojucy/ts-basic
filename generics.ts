function echo<T>(str: T):T {
    return str
}

let result = echo(123)
// let result = echo('hello world...')

function swap<T,U>(t: [T,U]): [U,T] {
    return [t[1], t[0]]
}

let tp = swap(['jack', 20])

function echoArrLength<T >(arr: T[]): T[] {
    console.log(arr.length)
    return arr
}

let arr = echoArrLength([1,2,3,4])


class Queue<T> {
    private data = []
    pop(): T {
        return this.data.shift()
    }
    push(e: T) {
        this.data.push(e)
    }
}

let queue = new Queue<number>()
queue.push(1)
queue.push(2)
queue.push(3)
// queue.push('three')  
let e = queue.pop()