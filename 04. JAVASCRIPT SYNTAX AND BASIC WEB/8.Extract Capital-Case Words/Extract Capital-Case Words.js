extractWords([
'We start by HTML, CSS, JavaScript, JSON and REST.\
Later we touch some PHP, MySQL and SQL.\
Later we play with C#, EF, SQL Server and ASP.NET MVC.\
Finally, we touch some Java, Hibernate and Spring.MVC.'
]);
function extractWords(array) {
    let onlyCapitalWords= array.join('').match(/(\w[A-Z]+)/g);
    console.log(onlyCapitalWords.join(', '));
    
}
