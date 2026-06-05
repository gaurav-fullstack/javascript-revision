//Check if a number is even or odd.


const num =11;
if (num % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}


// Age Checker: Check if a person is eligible to vote (age 18 or above).

const age=16;
if(age >= 18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

//largest of two numbers

const num1=19;
const num2=24;

if(num1>num2){
    console.log(`${num1} is larger than ${num2}`);
}else if(num2>num1){
    console.log(`${num2} is larger than ${num1}`);
}else{
    console.log(`${num1} and ${num2} are equal.`);
}