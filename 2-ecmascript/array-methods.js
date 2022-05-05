console.group("array-methods.js");
let myArray = ["element",true,false,35,2];

myArray.push(435,23,5);//inserts at the end of an array many elements
myArray.unshift("pre-element");//inserts an element at the beginning of array
myArray.pop();//removes the last element of array
console.log(myArray);

let newArray2 = myArray.splice(0,3);//cuts a chunk of an array and returns it (the chunk is lost in original array)
console.log(newArray2);

let findElement = myArray.find((value) => value === false);
console.log(findElement);

let findIndex = myArray.findIndex((value) => value === 2);
console.log(findIndex);

console.groupEnd();
