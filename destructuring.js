const actor = {
    name: 'anatahd',
    age: 30,
    phone: '01756546546546',
    money: 4165456465
}


// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
// const money = actor.money;

// use above method in a short way destructuring 
// if right side is an object left side of destructuring will be object as well 
//  use property name as a variable that contains the property value 


// const {phone, age} = actor
// can change property name also 
const {phone, age: boyos} = actor

// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(age)
// console.log(age)
// console.log(age)
// console.log(boyos)
// console.log(boyos)
// console.log(boyos)
// console.log(boyos)


// array destructuring */************ */
const numbers = [45,99];
const [first, second] = numbers;

const [x, y] = [12,66];



/////////// advanced************
function doubleThem (a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);

console.log(prothom, ditiyo)