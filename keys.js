const glass = { name: 'glass', 
                color: 'golden', 
                price: 12, 
                isCleaned: true
            
            };

console.log(glass);


// KEYS **********************************************

const keys = Object.keys(glass);

// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys);


// VALUES **********************************************

const values = Object.values(glass);

// [ 'glass', 'golden', 12, true ]
console.log(values);



// ENTRIES********************************************* 
const entries = Object.entries(glass);

console.log(entries)
// array of array, two dimensional array***
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]
  



///delete****************************************
delete glass.isCleaned;
console.log(glass);




//  more ...............
// rest 
const {isCleaned, ...shortGlass} = glass;

// freeze korle object a kono kisu delete add change kora jabe na
Object.freeze(glass);