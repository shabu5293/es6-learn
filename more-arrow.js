// double ba tar basi parameter thakle () hobe.************
const difference = (x, y) => x-y;
const multiply = (first, second, third) => first * second * third;

// single parameter thakle () dilaw hobe na dilaw hobe************
const getAge = (person) => person.age;

const student = { name: 'shabu', age:32 }
const age = getAge(student)
console.log(age);


const getThird = numbers => numbers[2];
const third = getThird([5, 9, 88, 65, 13])
console.log(third);

// No parameter***************
const getPI = () => Math.PI
console.log(getPI());


// large arrow function************** Need to use return keyword*
const doMath = (x, y, z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult 
    return result
}