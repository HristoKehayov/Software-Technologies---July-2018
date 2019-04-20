function reverseNums(nums) {
    let reverseNums = nums.map(Number).reverse();
    for (let num of reverseNums) {
        console.log(num);
    }
    
    
}

reverseNums([
    '10', 
    '20', 
    '30'
])