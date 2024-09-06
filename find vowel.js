// //  find vowel a string using function

// function vowelF(str) {
//     let vowelValue = ['a','e','i','u','o']
//     for (let i = 0; i < str.length; i++) {
//         if(vowelValue.includes(str[i].toLowerCase())){
//             console.log("Vowel is ", str[i]);
//         }
//     }
// }
// const a  = "Abdullah AL Noman";
// const vowel = vowelF(a);
// console.log(vowel);




function userValue(vowel) {
    let vowelValue = "a,e,i,o,u";
    let spVowel = vowelValue.split(",");
    for (let i = 0; i < vowel.length; i++) {
        if (spVowel.includes(vowel[i].toLowerCase())) {
            console.log("The vowel is form string = ", vowel[i]);
        }
    }
    // console.log(vowel , spVowel);
    
}
const userName = "Maisa Monora Moule";
const value = userValue(userName)
console.log(value);