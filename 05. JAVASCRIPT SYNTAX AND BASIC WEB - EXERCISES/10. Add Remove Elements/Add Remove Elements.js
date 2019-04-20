function name(args) {
    let arr = new Array();
    for (let i = 0; i < args.length; i++) {
        let temp = args[i].split(' ');
        let command = temp[0];
        let index = temp[1];
        if (command === "add") {
            arr.push(index);
        } else if (command === "remove") {
            if (arr[i] != null || arr[i] != "undefined") {
                arr.splice(index, 1);
            }else{
                continue;
            }
        }
    }

    for (let num of arr) {
        console.log(num);
    }
}

name(['add 3', 'add 5', 'remove 2', 'remove 0', 'add 7'])