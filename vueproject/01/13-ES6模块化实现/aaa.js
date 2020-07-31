var name = 'ming'
var flag = true

function sum(first, second) {
    return first + second
}
if(flag){
    console.log('hahah');
}

export {
    flag,sum
}

export var number  = 1000

export function multi(number1,number2) {
    return number1 * number2
}

export class Person{
    run(){
        console.log('run');
    }
}

const address = 'shanghai'
export default address