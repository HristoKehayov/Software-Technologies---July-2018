function EqualNumbers(arr) {
    let nums = arr[0].split(' ').map(Number);

    console.log(checkNum(nums[0], nums[1], nums[2]) ||
        checkNum(nums[2], nums[1], nums[0]) ||
        checkNum(nums[0], nums[2], nums[1]) ||
        "No");

    function checkNum(number1, number2, sumOFnumbers) {
        if (number1 + number2 !== sumOFnumbers) {
            return false;
        }
        if (number1 > number2) {
            [number1, number2] = [number2, number1];
        }
        return `${number1} + ${number2} = ${sumOFnumbers}`;
    }

}

EqualNumbers(['-5 -3 -2'])