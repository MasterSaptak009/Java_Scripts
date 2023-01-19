document.getElementById("in").addEventListener("click",function(a,b){
    if(b==0){
        return a;
    }
    return (a,b%a);
})