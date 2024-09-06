//  written array form all even numbers

function userName(number) {
    let even = [];
    let odd = [];
    let sum = 0;
    let oddSum = 0;
    for (const e of number) {
        if (e % 2 === 0) {
            console.log("This is even number ", e);
            even.push(e); // all even number is store to even array , let even = []; the i push is on even array
            sum += e;

        } 
        else {
            console.log("this is the odd value", e);
            odd.push(e)
            oddSum += e;
        }
    }
    console.log("The sum of all even number is = ", sum);
    console.log("The sum of all odd number is = ", oddSum);
    console.log("This is store of all odd number",odd);
    console.log("This is store of even number ", even);
    return sum;

}

const arr = [12, 34, 11, 349, 56, 3, 76, 87, 34, 54, 23];
const value = userName(arr)
console.log(value);