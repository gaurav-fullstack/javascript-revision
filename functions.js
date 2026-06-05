function sum (a,b){
    const sum =a+b;
    return sum;
}

//Greet user

function greetUser(name){
    console.log(`Hello ${name}.`);
}


// find square of a number
function findSquare(number){
    
    console.log(`Square of ${number} is : ${number*number}`)

    return number*number;
}


//Check if a number is even or odd.
function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}


// find largest of two numbers
function findLargest(a,b){
    if(a > b){
        return a;
    }else if(b > a){
        return b;
    }
}

//arrow function to find largest of two numbers

const findLargestArrow = (a,b) =>{
  return (a>b) ? a : b;
}

greetUser("Alice");
