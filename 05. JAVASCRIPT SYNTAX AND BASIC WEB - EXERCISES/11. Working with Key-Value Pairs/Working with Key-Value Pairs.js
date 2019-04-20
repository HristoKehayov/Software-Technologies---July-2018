function PrintValueByKey(args) {

    let keyvalueMap = new Map();
    let object = {};
    let printKeyonLastIndex = args[args.length-1];

    for (let i = 0; i < args.length -1; i++) {
        let temp = args[i].split(' ');
        let key = temp[0];
        let value = temp[1];
        object[key] = value;
    }
    if(object[printKeyonLastIndex]==null){
        console.log('None');
    }else{
        console.log(object[printKeyonLastIndex]);
    }

}

PrintValueByKey(['2 bla', '2 alb', '3']);