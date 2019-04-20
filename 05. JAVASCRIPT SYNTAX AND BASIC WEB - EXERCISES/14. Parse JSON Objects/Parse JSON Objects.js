function parseJSON(array) {
    let students = array.map(e => JSON.parse(e));
    for (let item of students) {
        let name = console.log('Name: ' + item.name);
        let age = console.log('Age: ' + item.age);
        let date = console.log('Date: ' + item.date);
    }

}
parseJSON(['{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
]);