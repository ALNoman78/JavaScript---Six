// dhori akta array er moddhe sob ghula odd number ke ak jaygay store kore rakhte hbe trpr sei odd number ghular sumtotal amke console.log er moddhe diya show kore dite hbe 
// let's try this task

function oddNumber (number){
    let sum = 0;
    let x = 0;
    let even = [];
    let oddNum = [];
    for (const e of number) {
        if (e % 2 !== 0) {
            oddNum.push(e)
            sum += e;
        } else {
            even.push(e);
            x += e;
        }
    }
    console.log("Even number array is = ", even);
    console.log("Odd number array is = ", oddNum);
    console.log("The all even number sum = ", x);
    console.log("This all odd number = ", sum);
    return sum ;
}
const arr = [11,14, 15, 13, 21 ,51, 63 , 33 ,22 ,124]
const sumTotal = oddNumber(arr);
console.log(sumTotal);