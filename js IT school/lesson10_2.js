
function fibonachi(n){
   
    if(n==0||n==1) return n;

    fibDebutArray=[0, 1];

    if(n>2){
        let answer;
        for (let index = 0; index < n-2; index++) {
           answer=fibDebutArray[index]+fibDebutArray[index+1];
           fibDebutArray.push(answer);
        }  

    return answer;
    
    }
}

alert(fibonachi(7)); //8