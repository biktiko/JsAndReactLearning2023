
function pow(a, b){

    let answer = a;
    for (let index = 1; index < b; index++) answer*=a;
    return(answer);
}

alert(pow(3, 5)); //243