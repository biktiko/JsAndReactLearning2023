class Human  {
    gender ='male';
    printGender = () => console.log(this.gender); 
}

class Woman extends Human{
    name='aline';
    age = 13;
    gender='famele'
    
    printName = () =>  console.log(this.name); 
}

const person = new Human();
const newPerson = new Woman();

person.printGender();
newPerson.printName();
newPerson.printGender();
