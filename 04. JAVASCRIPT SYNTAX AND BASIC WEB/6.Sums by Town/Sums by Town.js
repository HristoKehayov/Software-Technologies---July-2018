solve([
    '{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}'
]);

function solve(args) {
    let objects = args.map(e => JSON.parse(e));
    let alltowns = new Map();
    for (let item of objects) {
        if (!alltowns.has(item.town)) {
            alltowns.set(item.town, item.income)
        } else {
            alltowns.set(
                item.town, // set this town 
                (alltowns.get(item.town)) + item.income);
        }
    }
    //console.log(objects);
    console.log(alltowns);



}