const arr=[3,7,1,19,24,5,8,12,4,9];

//Find the largest number in an array.


let largest;

for(let i=0; i<=arr.length;i++){
    if(largest=== undefined || arr[i]>largest){
        largest=arr[i];
    }
}

console.log("largest number inthe array is: "+ largest);