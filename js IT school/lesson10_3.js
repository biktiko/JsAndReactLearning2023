
function factorial(n){
    
    if(n==0||n==1) return 1;
    return factorial(n-1) * n;
  
}

alert(factorial(5)) //120