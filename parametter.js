// function name(params) {
    
// }

//  using one parameter

// function square(number){
//     console.log(number);
// }
// square(10)

// using 2 parameter 

// function multipale (number1, number2){
//     console.log(number1,number2);
//     const total = number1 * number2 ;
//     console.log(total);
// }
// multipale(12,13)


// using four parameter 

// function newSquare (num1, num2, num3, num4){
//     console.log(num1, num2 , num3 , num4);
//     const subtotal = num1 + num3 + num2  + num4;
//     console.log(subtotal);
// }
// newSquare(1,2,3,4)


// using parameter divided some value

// function dividedValue ( para1, para2, para3, para4){
//     console.log(para1, para2 , para3, para4);
//     const sumOfTotal = para1 + para2 + para3 + para4
//     console.log(sumOfTotal);
// }
// dividedValue(120,23,45,653)

// how to added reverse function

// function reversed (newValue){
//     console.log(newValue);
//     let valuse = newValue.split(" ");
//     console.log(valuse);
//     let xi = valuse.reverse()
//     console.log(xi);
//     let i = xi.join(" ")
//     console.log(i);
// }
// reversed("I love you moule")




//  using find the value in string

function findValue(findVowel){
    let vowel = "a,e,i,o,u";
    let spVowel = vowel.split(",");
    console.log(spVowel);
    for(let i = 0; i < findVowel.length; i++){
        if (spVowel.includes(findVowel[i].toLowerCase())) {
            console.log("find of the sentence = ", findVowel[i]);
        }
    }
}
findValue("I love you Maise Monowara Moule")