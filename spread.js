// spread operator*************

const max = Math.max(5, 89, 103, 89, 99, 4)
const numbers = [3, 5, 44, 21, 30, 14, 61, 66, 34, 701, 20, 11];
// const arrayMax = Math.max(numbers);
const arrayMax = Math.max(...numbers);

// console.log(max)
// number k console log korle array pawa jabe
console.log(numbers)
// number ar samne 3 dot dile sudhu number pawa jabe
console.log(...numbers)
console.log(arrayMax)


// use spread operator to copy 

// const nums = [4, 5, 88, 16, 91, 41];
// const nums2 = nums;
// nums2.push(100);
// // console.log(nums2);
// // console.log(nums);

const numbs = [4, 5, 88, 16, 91, 41];
const numbs2 = [...numbs];  /// use spread operator to copy.....ata use korle push korar por 2 tar element same thake na jtate push kora hoy setate jay
numbs2.push(100);
console.log(numbs2);
console.log(numbs);

// Advanced*************

const sonkha = [...numbs, 33]; //add extra element while copy
console.log(sonkha);