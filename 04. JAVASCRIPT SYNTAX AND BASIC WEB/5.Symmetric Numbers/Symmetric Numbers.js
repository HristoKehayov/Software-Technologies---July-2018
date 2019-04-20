function checkNumIfsymmetrical(number) {
    let num = Number(number[0]);

    for (let i = 1; i <= num; i++) {
        if(i+""=== [...i+""].reverse().join("")){
            console.log(i);
        }
    }
}
checkNumIfsymmetrical(['2000']);