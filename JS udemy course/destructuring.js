const array = [1, 2, 3, 4];
const [num1, num2]= array;
console.log(num2)  //2


const randomObject = {
    name: 'lilith',
    age: 20
}

const copyRandomObject = {...randomObject}; // в этом случае это действительно будет копия самого обьекта, не ссылки