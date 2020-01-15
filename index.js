var feeling_good = true
const pi = 3.14

var cars = ["Saab", "Volvo", "BMW"];

var student1 = { firstName: "John", lastName: "Doe", fullName : function() {
        return this.firstName + " " + this.lastName;
    } };
var student2 = { firstName: "Piet", lastName: "Peeters", fullName : function() {
        return this.firstName + " " + this.lastName;
    } };
var student3 = { firstName: "Leen", lastName: "Janssens", fullName : function() {
        return this.firstName + " " + this.lastName;
    } };

var studenten = [ student1, student2 ];
studenten.push(student3);

let kleur = "groen"

function PrintStudents( lijst, kleur )
{
    //loop all students
    var i = 0;
    for ( ; i < lijst.length; i++)
    {
        //and print firstName
        document.write(lijst[i].fullName() + "<br>")
    }

    lijst[0].firstName = "Steven"
    kleur = "rood"
}

PrintStudents(studenten, kleur);
document.write("is het John of Steven? " + studenten[0].firstName + "<br>")
document.write("is het groen of rood? " + kleur + "<br>")

if ( feeling_good )
{
    console.log("Goeiemorgen allemaal !!! Pi is gelijk aan " + pi )
}
else
{
    console.log("Slechtemorgen allemaal !!!")
}
