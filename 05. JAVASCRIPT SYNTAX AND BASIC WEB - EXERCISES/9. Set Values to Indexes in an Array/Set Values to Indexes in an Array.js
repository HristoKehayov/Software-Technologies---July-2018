function SetArrayValues(lengthOfarray, indexAndValue) {
    let lenghtOFarray = new Array(lengthOfarray);

    for(let i=0;i<indexAndValue.length;i++){
        let temp=indexAndValue[i].split(' - ');
        let index=temp[0];
        let value=temp[1];
        lenghtOFarray[index]=value;
    }
    
    //pring array
    for (let num of lenghtOFarray) {
        if(String(num)==='undefined') num=0;
        console.log(num);
    }
}

SetArrayValues(5, ['0 - 3', '3 - -1', '4 - 2']);