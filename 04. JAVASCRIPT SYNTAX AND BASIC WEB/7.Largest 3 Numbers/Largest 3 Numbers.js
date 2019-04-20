function largest3nums(arrayNums) {
    let sortedNumbers = arrayNums[0].split(' ').map(Number).sort((a, b) => b - a);

    for (let i = 0; i < 3; i++) {
        console.log(sortedNumbers[i]);
    }
}

largest3nums(['10 30 15 20 50 5'])