// # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// def print_numbers_divisible_by_three
//   index = 1
//   while index <= 1000
//     if index % 3 == 0
//       puts index
//     end
//     index += 1
//   end
// end
// print_numbers_divisible_by_three
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}



// # Write a method that accepts an array of strings and prints out every other string.
// def print_every_other_item(strings)
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       puts string
//     end
//     index += 1
//   end
// end
// print_every_other_item(["a", "b", "c", "d", "e"])
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}



// # Write a method that accepts an array of numbers and returns the sum.
// def compute_sum(numbers)
//   sum = 0
//   numbers.each do |number|
//     sum += number
//   end
//   return sum
// end
// puts compute_sum([2, 4, 5])
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}


// # Start with the hash: city_populations = {chi: 2700000}
// # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// city_populations = {chi: 2700000}
// city_populations[:nyc] = 8400000
// city_populations[:sf] = 800000
// p city_populations
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]




// # Write a method that prints out every number from 1 to 100.

function printOutNumberTo100() {
  for(var i = 0; i < 101; i++) {
    console.log(i)
  }
}


// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

function printOutEveryOtherNumberTo100() {
  var count = 0;
  for(var i = 0; i < 101; i+= 2) {
    console.log(i)
  }
}



// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function printEvery55(numbers) {
  var counter = 0;
  numbers.forEach((number) => {
    if(number === 55) {
      counter++;
    }
  });
  console.log(counter)
}

printEvery55([23, 23, 55, 23, 55, 55]);


// # Write a method that accepts an array of strings and returns a new array that has the string “awesomesauce” inserted between every string.
// # For example, if the initial array is [“a”, “b”, “c”, “d”, “e”], then the returned array should be [“a”, “awesomesauce”, “b”,  “awesomesauce”, “c”,  “awesomesauce”, “d”,  “awesomesauce”, “e”].

function awesomesauceArray(characters) {
  var new_array = []
  for(var i=0; i < characters.length; i++){
    new_array.push(characters[i]);
    new_array.push("awesomesauce")
  }
  console.log(new_array)
}


// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}

item_amounts = {chair: 5, table: 2};
item_amounts["chair"] = 3;



// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}

item_amounts = {chair: 5, table: 2};
item_amounts["desk"] = 7;
console.log(item_amounts);

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number){
  for(var i = number-1;  i > 0; i-- ) {
    number *= i;
  }
  console.log(number);
}
factorial(5);


// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function sumOfArrays(array1, array2) {
  var new_array = []
  for(var i = 0; i < array1.length; i++) {
    for(j = 0; j < array2.length; j++) {
      new_array.push(array1[i]+array2[j]);
    }
  }
  console.log(new_array);
}
var array1 = [1, 5, 10]
var array2 = [100, 500, 1000]

sumOfArrays(array1, array2)
