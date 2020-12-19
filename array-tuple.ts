//最简单的方法是使用「类型 + 方括号」来表示数组：
let numberArr: number[] = [1, 2, 3, 4]
//数组的项中不允许出现其他的类型：
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
numberArr.push(3)
// numberArr.push('abc')

// 元祖的表示和数组非常类似，只不过它将类型写在了里面 这就对每一项起到了限定的作用
let user: [string, number] = ['jack', 20]
user.push('rose')
user.push(18)
//但是当我们写少一项 就会报错 同样写多一项也会有问题
// user = ['rose', 20, true]