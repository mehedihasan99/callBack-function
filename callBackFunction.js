/* function hello(name, callBack){
    callBack(name);

}
hello("Mehedi Hasan", function (getName){
    console.log('This is', getName);
}); */

const person = {
    name : "mehedi hasan",
    age : 23,
    city : "sylhet"
}

function propertyOfPerson(person, callBack){
    console.log( "Name of Person :", person.name);
    callBack(person.city);
}
propertyOfPerson(person, function(city){
    console.log("Name of The City :", city);
})