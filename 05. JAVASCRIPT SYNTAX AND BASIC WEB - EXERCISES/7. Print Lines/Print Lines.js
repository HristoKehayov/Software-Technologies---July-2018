function PrintLines(args) {
    for (let i = 0; i < args.length; i++) {
        if(args[i]== 'Stop') {
            break;
        }
        
        console.log(args[i]);
    }
}

PrintLines(['Line 1', 'Line 2', 'Line 3', 'Stop']);