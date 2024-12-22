
//  **************FUNCTION DECLARATION***********

// function add (a, b){
//     const result = a+b;
//     return result;
// }
function add (a, b){
    return a+b;
}

// const sum = add(5, 90);
// console.log(sum);

// *************FUNCTION EXPRESSION ***************

const add2 = function(a,b){
    return a+b;
}

// const sum = add2(5, 90);
// console.log(sum);

// ***********ARROW FUNCTION ************  { function symbol => }

const add3 = (a, b) => a+b;


const sum = add3(5, 90);
console.log(sum);