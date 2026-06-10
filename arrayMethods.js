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

const sum = numbers.reduce((accumulator, currentValue, index, array) => {
  console.log(`Iteration ${index}:`);
  console.log(`  Accumulator so far: ${accumulator}`);
  console.log(`  Current value: ${currentValue}`);
  console.log(`  index: ${index}`);
  console.log(`  Full array: ${array}`);
  
  return accumulator + currentValue;
}, 0);

console.log("Final result:", sum);


// find method to find the first number greater than 25 in the array.
// find returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
// syntax of find method: array.find(function(currentValue, index, arr), thisValue)

const firstNumberGreaterThan25 = numbers.find(number => number > 25)
console.log(`First number greater than 25 is : ${firstNumberGreaterThan25}`);

const arrayG = ["10", "10", "10"]
console.log(arrayG.map(parseInt));  // its output would be [10, NaN, 2] because parseInt takes two arguments, the string to parse and the radix (base) which is optional. 
// When map calls parseInt, it passes three arguments: the current element, the index, and the entire array. 
// So for the first element "10", parseInt("10", 0) returns 10. For the second element "10", parseInt("10", 1) returns NaN because 1 is not a valid radix. 
// For the third element "10", parseInt("10", 2) returns 2 because in base 2, "10" represents the number 2.