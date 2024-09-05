// how to added sum using function()

function sumTotal(number) {
    // let x = number + number2 + number3 + number4 + number5 + number6
    let sum = 0;
    for (const e of number) {
        // console.log(e);
        sum += e;
        console.log(sum);
    }
    // console.log(number);
}
sumTotal([20,30,40,50,60,70]);



// basic function 

function sum (num1, num2){
    let math = num1 + num2
    console.log(num1 , num2 , "The value of sum is = ", math);
}
sum(90 , 10)



//  task 2

function eName (reversed){
    let x = reversed.split(" ");
    let o = x.reverse();
    let j = o.join(" ")
    return j ;
}
const valueRev = eName("Abdulla AL Noman");
console.log(valueRev);

// I love my country as you know