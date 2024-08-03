
function length(n){
 
    let i=1;
    let count =1;
    while(n/i>=10){
        i*=10;
        count++;
    }   
    return count;
}

alert(length(253534)) //6