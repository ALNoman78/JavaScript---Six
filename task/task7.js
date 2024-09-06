function newValue(str) {
    for (const e of str) {
        let x = e.length;
        if (x % 2 === 0 ) {
            console.log("Even value");
            return true;
        } else {
            console.log("This is odd number");
            return false;
        }
    }
}
const x = newValue(["Dhaka", "Rangpur", "kurigram"])
console.log(x);