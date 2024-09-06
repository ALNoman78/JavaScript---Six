// write a function give an array all sum of number

function arr(number) {
    let sum = 0;
    for (const e of number) {
        sum += e;
    }
    return sum;
}
const sumTotal =  arr([10,20,30,40,50])
console.log(sumTotal);