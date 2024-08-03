
function sortMassive(array){

    let sortArray = array.slice(0);
    
    for (let i = 0; i < sortArray.length; i++) {
        for (let k = i; k < sortArray.length; k++) {
            if(sortArray[i]>sortArray[k]){
                sortArray.splice(k+1, 0, sortArray[i]);
                sortArray.splice(i, 1);
                k=i;
            } 
        }
    }
    
    return sortArray;
}

array = [24, 12, 56, 43, 2, 9, 8, 13, 16];

alert(sortMassive(array)); //[2, 8, 9, 12, 13, 16, 24, 43, 56] 
alert(array) //[24, 12, 56, 43, 2, 9, 8, 13, 16] array-ի արժեքը չի փոխվել
