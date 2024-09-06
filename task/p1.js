function sizeMention(para){
    let infin = -Infinity;
    for(let i = 0; i < para.length; i++){
        // console.log(para[i].length);
        let x = para[i].length;
        if (x > infin) {
            infin = x;
        }
    }
    console.log("The largest string is  =", infin) ;
}
sizeMention(["Abul", "Kabul", "Jamal", "Kalam"])