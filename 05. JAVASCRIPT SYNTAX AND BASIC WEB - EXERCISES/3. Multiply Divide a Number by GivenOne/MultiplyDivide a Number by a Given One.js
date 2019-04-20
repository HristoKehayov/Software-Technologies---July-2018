function multiORdevi(nums) {
    let n = Number(nums[0]);
    let x = Number(nums[1]); //if x>=n => x*n atherwise check if n > x if true devide n to x
    let result = console.log((x >= n) ? (x * n) : (n > x) ? (n / x) : null);
    return result;
}

multiORdevi(['144', '12']);