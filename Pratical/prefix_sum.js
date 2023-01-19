function preFixSum(arr,n,prefixsum){
    prefixsum[0] = arr[0];
    for(let i=1;i<n;i++){
        prefixsum[i]= prefixsum[i-1]+arr[i];
    }
}