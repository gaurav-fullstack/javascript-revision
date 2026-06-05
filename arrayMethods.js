//Array Methods  ----->

//map
//filter
//reduce
//find
//forEach
//some
//every
//includes
//indexOf
//lastIndexOf
//slice
//splice

const numbers = [10, 20, 30, 40, 50];

//map method to create a new array with each element doubled.
//map returns a new array with the results of calling a provided function on every element in the calling array.
// syntax of map method: array.map(function(currentValue, index, arr), thisValue)

const doubledNumbers = numbers.map(num=> num*2);

console.log(`Doubled Numbers : ${doubledNumbers}`);

// filter method to create a new array with numbers greater than 25.
//filter also returns a new array with all elements that pass the test implemented by the provided function.
// syntax of filter method: array.filter(function(currentValue, index, arr), thisValue)

const numberGreaterThan25 = numbers.filter(num => num > 25);

console.log(`Numbers greater than 25 : ${numberGreaterThan25}`);

//reduce method to calculate the sum of all numbers in the array.
//reduce executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// syntax of reduce method: array.reduce(function(accumulator, currentValue, index, arr), initialValue) 

//const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


//console.log(`Sum of Numbers : ${sumOfNumbers}`);

const sum = numbers.reduce((accumulator, currentValue, index, array) => {
  console.log(`Iteration ${index}:`);
  console.log(`  Accumulator so far: ${accumulator}`);
  console.log(`  Current value: ${currentValue}`);
  console.log(`  index: ${index}`);
  console.log(`  Full array: ${array}`);
  
  return accumulator + currentValue;
}, 0);

console.log("Final result:", sum);
