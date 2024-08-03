
function sortMassive(array){
    for (let i = 0; i < array.length; i++) {
        for (let k = i; k < array.length; k++) {
            if(array[i]>array[k]){
                array.splice(k+1, 0, array[i]);
                array.splice(i, 1);
                k=i;
            } 
        }
    }
    return array;
}

array = [24, 12, 56, 43, 2, 9, 8, 13, 16];

alert(sortMassive(array)); //[2, 8, 9, 12, 13, 16, 24, 43, 56]
alert(array); //[2, 8, 9, 12, 13, 16, 24, 43, 56] array-ի արժեքը չի փոխվել

