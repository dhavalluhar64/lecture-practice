


//(1) Single-Level-Inheritance

//--> Single-level inheritance involves a single class inheriting from another.


class student {

    constructor(name, age, std) {

        this.name = name;
        this.age = age
        this.std = std;
    }

    studentClass(surname) {

        return `i am ${this.name} ${surname} and i am currently parsuing ${this.std} and i am ${this.age} years old`
    }

}

class student1 extends student {

    studentClass(surname) {

        return `i am ${this.name} ${surname} and i am currently parsuing ${this.std} and i am ${this.age} years old`;
    }
}


const StudentDetails = new student1("Sanket", 17, "12th");


console.log(StudentDetails.studentClass("suthar"))