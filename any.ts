/**
 * Any类型
 */
let anyObj: any = 4
anyObj = 'maybe it is a string'
// 在任意值上访问任何属性都是允许的：
anyObj.myName
// 也允许调用任何方法：
anyObj.getName()