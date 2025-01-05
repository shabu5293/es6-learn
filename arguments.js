function sum(a, b, c){

    console.log(arguments);
    console.log(arguments[4]);
    console.log(typeof arguments);

    const args = [...arguments];
    console.log(args);

    
    const result = a+b+c;
    return result;
}

const total = sum(45,89,58);
console.log(total);

const total2 = sum(45,89,58,98,105,48,30);
console.log(total);