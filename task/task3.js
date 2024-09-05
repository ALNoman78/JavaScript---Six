function makeAvg (number){
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

const avg = makeAvg(31)
console.log(avg);