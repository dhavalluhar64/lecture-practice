
//(3) MultiLevel-Inheritance

//--> Multi-level inheritance involves a chain of inheritance, where a class is derived from a derived class.


class detailAllstudent {

    constructor(name, age, std) {

        this.name = name;
        this.age = age
        this.std = std;
    }

    studentClass1(surname) {

        return `i am ${this.name} ${surname} and i am currently parsuing ${this.std} and i am ${this.age} years old`
    }

}

class person1 extends detailAllstudent {

    studentClass1(surname) {

        return `i am ${this.name} ${surname} and i am currently parsuing ${this.std} and i am ${this.age} years old`;
    }
}

class person2 extends person1 {

    studentClass1(surname) {

        return `i am ${this.name} ${surname} and i am currently parsuing ${this.std} and i am ${this.age} years old`;

    }

}


const StudentDetails1 = new person2("jaimin", 22, "Msc");


console.log(StudentDetails1.studentClass1("suthar"))

// 