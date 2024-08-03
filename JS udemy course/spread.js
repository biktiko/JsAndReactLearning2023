const array = [1, 2, 3];
const newArray = [...array, 4] 

console.log(newArray); //1, 2, 3, 4

const filter = (...args) => {
    return args.filter(el => el === 1 )
    // return args.map(el => el * 2 )
} 

console.log(filter(1, 2, 3, 4, 5));