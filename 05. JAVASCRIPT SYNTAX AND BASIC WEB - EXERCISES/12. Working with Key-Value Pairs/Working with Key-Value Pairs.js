function PrintValueByKey(args) {

    let keyvalueMap = new Map();
    let printKeyonLastIndex = args[args.length - 1];

    for (let i = 0; i < args.length - 1; i++) {
        let temp = args[i].split(' ');
        let key = temp[0];
        let value = temp[1]
        keyvalueMap.set(key, value);
        if(key===printKeyonLastIndex){
            console.log(keyvalueMap.get(key));//or conslo.log(value);
        }
    }
    if (keyvalueMap.get(printKeyonLastIndex) == null ||
    keyvalueMap.get(printKeyonLastIndex) == undefined) {
        console.log('None');
    } 
}

PrintValueByKey(['key bla', 'key alb', 'test tsest', 'key']);