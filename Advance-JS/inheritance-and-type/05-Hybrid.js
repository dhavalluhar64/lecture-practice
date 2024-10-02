

// (1) Hybrid Inheritance

//-->  hybrid inheritance is a combination of multiple inheritance (using mixins or composition) and hierarchical inheritance.


let canFly = {

    run() {

        console.log(`${this.name} is Flying`);
    }
}

let canSwim = {

    Swim() {

        console.log(`${this.name} is Swimming`);
    }
}


class Animal {

    constructor(name) {

        this.name = name;
    }

    speak() {

        console.log(`${this.name} makes a sound`)
    }
}


class Bird extends Animal {

    constructor(name) {

        super(name);
    }
}

Object.assign(Bird.prototype, canFly);


class Fish extends Animal {

    constructor(name) {

        super(name)
    }
}

Object.assign(Fish.prototype, canSwim);



class duck extends Animal {

    constructor(name) {

        super(name);
    }
}

Object.assign(duck.prototype, canFly, canSwim);


const egale = new Bird("Egale");

egale.speak();
egale.run()

const Shark = new Fish("Shark");

Shark.speak();
Shark.Swim()


const Duck = new duck("Donald");

Duck.speak();
Duck.run();
Duck.Swim()

// 