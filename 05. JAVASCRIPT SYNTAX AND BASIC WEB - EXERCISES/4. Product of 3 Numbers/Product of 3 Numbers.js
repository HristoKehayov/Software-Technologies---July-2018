function checkIfNegative(nums) {
    let x  = Number(nums[0])
    let y  = Number(nums[1])
    let z  = Number(nums[2])
    let howMuchnegativenums = 0;
    for (let number of nums) {
        if(number<0)howMuchnegativenums++;
    }
    let result = console.log(chetnoIlinechetno('chetno')?'Positive':'Negative');
    
    function chetnoIlinechetno(params) {
        if(howMuchnegativenums%2==0)return 'chetno';
        else return null;
    }
}

checkIfNegative(['-5', '-4', '3'])