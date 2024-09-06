function bigNumber(number) {
    let x = -1;
    for (let i = 0; i < number.length; i++) {
    if (number[i] > x) {
        x = number[i];
        console.log("The largest number = ", number[i]);
    }
}
}

const value = bigNumber([12,43,65,23,56,32,6,5,34,123,54,233,2]);
console.log("the largest number of the array is = ", value);