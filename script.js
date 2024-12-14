//задание 1
let books = ['Chronicles of Narnia', 'Harry Potter'];
console.log(books)

// задание 2
books.push('secret key', 'coraline');
console.log(books);

let ds = books.shift('secret key');
console.log(ds);
console.log(books);

//задание 3
let books1 = ['Chronicles of Narnia', 'Harry Potter', 'secret key', 'coraline']


books1.forEach(function (Chronicles) {
    console.log(Chronicles);
});
  
//задание 4 --
const books11 = ['Chronicles of Narnia', 'Harry Potter', 'secret key', 'coraline']
console.log(books11.indexOf('Harry Potter'))

let arr = ['Harry Potter', 'secret key', 'coraline'];

let res1 = arr.filter(function (elem) {
    if (elem >= 1) {
        return true;
    } else {
        return false;
    }
});

console.log(res1);


//задание 5  --
//1
let arr1 = ['Harry Potter', 'secret key', 'coraline'];

let res = arr1.map(function (elem) {
    return elem * 2;
});

console.log(res);

//задание 6 
//1
let books111 = ['Chronicles of Narnia', 'Harry Potter', 'secret key', 'coraline'];
console.log(books111.sort());

// задание 7
//1
let books121 = ['Harry Potter order of the phoenix',
    'Harry Potter deathly hallows',
    'Harry Potter and the goblet of fire'];
console.log(books121)
//2
const array1 = ['Harry Potter order of the phoenix',
    'Harry Potter deathly hallows',
    'Harry Potter and the goblet of fire'];
const array2 = ['Harry Potter', 'secret key', 'coraline'];
const array3 = array1.concat(array2);

console.log(array3);

//задание 8 
//1
let NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(NUMBERS)
//2
let arr33 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res44 = arr33.filter(function (elem) {
    if (elem >= 0) {
        return true;
    } else {
        return false;
    }
});

console.log(res44);
//3

//4


//9 задани 
//1 
