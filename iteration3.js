//1 const budgets = [150,1000,3000,10500,12000];
// 1 function highBudget(x){
// 1  return x > 3000
// 1  }console.log(budgets.filter(highBudget));



// 2  let budgets = [150, 1000, 3000, 10500, 12000];
// 2  function add500(x) {
// 2  return x + 500;
// 2 }
// 2 console.log(budgets.Map(add500));
// 2 console.log(budgets);

// 3  let budgets = [150, 1000, 3000, 10500, 12000];
// 3 function doubleBudget(x){
// 3    return x * 2;
// 3 }const db = budgets.map(doubleBudget);
// 3 console.log(budgets);

// *this is for taking minimum budgets and to double them after calling them out ex: taking minimum salaries then doubling it
let budgets = [150, 1000, 3000, 10500, 12000];
function lowBudget(x){
    return x <= 1000;
}
function doubleBudget(x){
    return x * 2;
} 
console.log(budgets.filter(lowBudget).map(doubleBudget));


function dlbudget(x){
    if (x <= 1000){
        return x * 2;
    } return x;
}
console.log(budgets.map(dlbudget));