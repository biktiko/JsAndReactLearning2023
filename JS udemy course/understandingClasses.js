class Human  {
    constructor(){
        this.gender ='male';
    }

    printGender(){
        console.log(this.gender);
    }
}

class Woman extends Human{
    constructor(){
        super();
        this.name='name';
        this.age = 13;
        this.gender='famele'
    }

    printName(){
        console.log(this.name);
    }
}

const person = new Human();
const newPerson = new Woman();

person.printGender();
newPerson.printName();
newPerson.printGender();
