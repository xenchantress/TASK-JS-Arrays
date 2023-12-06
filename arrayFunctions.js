/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isArrayLengthOdd([1, 2, 3]));

// const numbers = [];
// const odds = [];
// for (const num of numbers) {
//   if (num % 2 === 1) {
//     odds.push(num);
//   }
// }
// console.log(odds); // [19, 5, 9, 13]
// }
// const arr = [1];
// arr.console.log(isArrayLengthOdd([1, 2, 3]));
// console.log(isArrayLengthOdd([1, 2, 3, 4]));
//const numbers = [1, 2, 3];
//if (numbers.length % 2 == 0) {
//} else {
//}

// Your code here

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isArrayLengthEven([1, 2, 3]));
// Your code here

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  // Your code here
  let Instructors = ["Hasan", "Mshary"];
  {
    Instructors.push("Laila");
    return Instructors;
  }
}
console.for(Instructors);

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(xCountries) {
  xCountries.pop();
}
let xCountries = ["Brazil", "Germany", "Italy"];
{
  let country = xCountries.slice(2, 3);
}
console.log(country);
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 == 0) {
    {
      return fruits.slice(fruits.length / 2);
    }
  } else {
    return [];
  }
  // Your code here
}

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */

const username = "Hi!!!!!!!!!!";
const firstEx = username.indexOf("!");
console.log(username.slice(0, firstEx + 1));

// console.log(username.slice(0, firstEx + 1));
// return shout.slice(0, index + 1);
// Your code here
function youGottaCalmDown(shout) {
  const index = shout.indexOf("!");
  return shout.slice(0, index + 1);
} console.log()
