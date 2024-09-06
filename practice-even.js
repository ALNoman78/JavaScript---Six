//  written array form all even numbers all
//  sum of all even number and store in a variable which type array
// let's start

function userArray(numbers) {
    console.log(numbers);
    let evenNumber = [];
    let sum = 0;
    for (const e of numbers) {
        evenNumber.push(e) // evenNumber hoilo variable er name variable er name diya array te push koray dite hbe ar push () method er vitore sob even number er location ghula dite hbe , ex - ekhne e er moddhe sob even number ghula store kore rakha ache ei jnno (e) deoa hoiche
        sum += e;
    }
    console.log(evenNumber);
    return sum;
}

let num = [12, 34, 443, 54, 12, 21, 41, 52, 15, 755, 93];
const sum = userArray(num);
console.log(sum);
