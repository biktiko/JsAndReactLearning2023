
function isPrime(n){

    if(n==1||n==2) return true
   
    for(let index=2; index<n-1; index++)  if(n%index==0) return false
    
    return true
}

alert(isPrime(19)) //true