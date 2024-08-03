
function mirror(n){ 
    
    let numberArray = n.toString().split('')

    for(index=0; index<=Math.round(numberArray.length/2); index++){
        if(numberArray[index]!=numberArray[numberArray.length-index-1]) return false
    }
    return true
  
}

alert(mirror(3518153));