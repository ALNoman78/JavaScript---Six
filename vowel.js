function vowelName(vowel) {
    let vowelL = "a,e,i,o,u";
    let spVowel = vowelL.split(",");
    for(let i = 0; i < vowel.length; i++){
        if(vowelL.includes(vowel[i].toLowerCase())){
            console.log("This is the vowel of your string = ", vowel[i]);
        }
    }
    return vowel;
}
const userName = "Abdullah Al Noman";
const value  = vowelName(userName);
console.log(value);