function turnIntoJSON(args) {
    let object = {};
    for (let i = 0; i < args.length; i++) {
        let temp = args[i].split(' -> ');
        let key = temp[0];
        let value = temp[1];
        object[key] = value;
    }
    console.log(JSON.stringify(object));
    
}

turnIntoJSON([
    'name -> Angel' /
    'surname -> Georgiev' /
    'age -> 20' /
    'grade -> 6.00' /
    'date -> 23/05/1995' /
    'town -> Sofia'
]);