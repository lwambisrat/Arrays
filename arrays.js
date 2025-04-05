//1  display last element
let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where",12,56];

console.log(arr1[arr1.length - 1]); 
console.log(arr2[arr2.length - 1]); 

//2 join elements

let myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join()); 
// or console.log(myPets.join(' ')); 

//3 sort arrays

let arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a, b) => a - b);
console.log(arr3); 

//4 without duplicate

let arr = ["boy", "man", "girl", "school", "girl", "woman"];

let unique = [...new Set(arr)];
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log("Unique:", unique);
console.log("Duplicates:", [...new Set(duplicates)]); 

//5 search array


let arr5 = ["the", "way", "x", 4];
let result = arr5.includes("food") ? "food" : "the search word was not found";
console.log(result); 

//6 sort worrd

let word = "renniw";
let sorted = word.split('').sort().join('');
console.log(sorted); 

//7 insert word


let fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pineapple', 'Strawberry', 'Blueberry', 'Raspberry'];

fruits.splice(5, 0, 'Tomato');

console.log(fruits);

