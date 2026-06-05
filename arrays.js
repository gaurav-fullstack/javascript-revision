const arr=[3,7,1,19,24,5,8,12,4,9];

//Find the largest number in an array.


let largest;

for(let i=0; i<=arr.length;i++){
    if(largest=== undefined || arr[i]>largest){
        largest=arr[i];
    }
}

console.log("largest number in the array is: "+ largest);

const fruits = ["apple", "banana", "Mango", "grape", "kiwi" ];

for(let i=0; i < fruits.length; i++){
    console.log("fruit at index "+ i + " is : "+ fruits[i])
}

console.log("First fruit is : ", fruits[0]);

console.log("Length of the array is : ", fruits.length);


const numbers =[10,10,43,91,41,101,10,8,9,4,15];

let sum = 0;
let largestNum= 0;
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
    if(numbers[i] > largestNum){largestNum = numbers[i]}
}

console.log(`Sum of the numbers is : ${sum}`);
console.log(`Largest number among the numbers is : ${largestNum}`);

numbers.push(200);
console.log("After pushing 200 to the array: ", numbers);

console.log("Popped out number is : ", numbers.pop());
console.log("After popping an element from the array: ", numbers);

function findLargestNumber(arr){
    let largestNumber =arr[0];
    for(let j=0; j<arr.length; j++){
        if(arr[j]> largestNumber){
            largestNumber = arr[j];
        }
    }

    console.log(`Largest number is ${largestNumber}`);
}

findLargestNumber(numbers);