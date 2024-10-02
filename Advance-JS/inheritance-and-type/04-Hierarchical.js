


// (1) Hierarchical Inheritance

//--> Hierarchical inheritance involves multiple classes inheriting from a single parent class.



class Principle {

    constructor(student1Roll, student2Roll) {

        this.student1Roll = student1Roll
        this.student2Roll = student2Roll

    }

    student1Information(name, age, Educations) {

        return `Roll No: ${this.student1Roll} Student name: ${name} Student Age: ${age} Study: ${Educations}`;

    }


    student2Information(name1, age1, Educations1) {

        return `Roll No: ${this.student2Roll} Student name: ${name1} Student Age: ${age1} Study: ${Educations1}`;

    }

}


class teacher extends Principle {


    student1Information(name, age, Educations) {

        return `Roll No: ${this.student1Roll} Student name: ${name} Student Age: ${age} Study: ${Educations}`;

    }

    subjectsName() {

        const subject = ["C", "C++", "Java", "Python", "C#"];

        subject.forEach((subject, index) => {

            console.log(index + 1, subject);

        })
    }
}



class teacher1 extends Principle {


    student2Information(name1, age1, Educations1) {

        return `Roll No: ${this.student2Roll} Student name: ${name1} Student Age: ${age1} Standered: ${Educations1}`;

    }

    subjectsName() {

        const subject = ["C", "C++", "Java", "Python", "C#"];

        subject.forEach((subject, index) => {

            console.log(index + 1, subject);

        })
    }

}


const detailsOne = new teacher(1, 2);

const detailsTwo = new teacher1(1, 2);

console.log(detailsOne.student1Information("Dhaval Panchal", 21, "BCA"));

detailsOne.subjectsName() // subject name call


console.log(detailsTwo.student2Information("Tushar Dharaiya", 26, "BCA"))

detailsTwo.subjectsName() // subjects name call


// 

