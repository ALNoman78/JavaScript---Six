function num(number, number2) {
    if (number2 === true) {
        let result = number * 2;
        return result;
    }else{
        let newResult = number * 3;
        console.log(newResult);
    }
}
console.log(num(10 , true));
console.log(num(11 , false));