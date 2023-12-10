//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function newNums(x) {
  if (x >= 25) {
    return true;
  }
}
console.log(numbers.filter(newNums));
// const dividedNums (x % 5)
// {
//     return  }
function remainder(x) {
  if (x % 5 == 0) {
    return x;
  }
}
console.log(numbers.filter(remainder));

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function pamBackwards (x){
    return x ** 2;

}
const Squared = numbers.map(pamBackwards);
console.log(Squared);

function multipliedByTwo (x) {
    return
}


/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const bothOfThem =  numbers.filter((x) => x >= 20).map((x) => x * x);
 function sureBothOfThem (x) {
    const filterNums = x.filter(function (num){
        return num >= 20;
    });
 } 
 const numNums = filterNums.map(function (num)
 {
    return num * num;
 });
 return numNums;
 const x = sureBothOfThem(rows);
// function toFilter (x) {
//     if (x >= 20 && ) {
//         return true;
//     } else {return false;
//     }
// }

// console.log(numbers.filter(toFilter));
//console.log(20 > 13);