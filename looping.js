const numbers = [1, 32, 40, 99, 31, 40, 72];

// for(let i=0; i<numbers.length; i++){}


for (const num of numbers){
    // console.log(num);
}

const nobab = 'siraj ud doula';
for(const char of nobab){
    // console.log(char);
}


// for of object ar upore chole na 
// for in chalaite hobe
const glass = { name: 'glass', 
                color: 'golden', 
                price: 12, 
                isCleaned: true
};

for (const key in glass){
        console.log(key);
}