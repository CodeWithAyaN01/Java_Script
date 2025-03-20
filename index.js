// cons variableName -> it cannot be updated or changed
// let variableName -> it can be changed:

// console.log("Ayan Gupta");
// age = 34;
// console.log(age)


// Objects in Java Script :
const Student = {
    name : "Ayan",
    Class : 10,
    rollNumber : 22,
    isPass : true
}
console.log(Student.name); // Using Dot Operator
console.log(Student["Class"]);
Student.rollNumber = Student.rollNumber +33;
console.log(Student.rollNumber); // prints the full Class with all variables:

