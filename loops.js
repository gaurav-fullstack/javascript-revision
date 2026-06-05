//Print numbers from 1 to 10 using a loop.

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Print even numbers from 1 to 20 using a loop.

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Print multiplication table of 5

for(let i = 1; i <= 10; i++){
    console.log(`5 X ${i} = ${5*i}`);
}

// sum of numbers from 1 to 10

let sum=0;

for(let i = 1;  i <=10; i++){
    sum= sum+i;
}
console.log(`Sum of numbers from 1 to 10 is : ${sum}`);