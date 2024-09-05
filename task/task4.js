// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(number) {
    let avg = 0;
    for (const e of number) {
        // console.log(e);
        avg += e;
        let x = avg / 7
        console.log(x);
    }
    console.log(number);
}
make_avg([10, 20, 30, 40, 50, 60, 70]);
