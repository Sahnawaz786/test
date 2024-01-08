let array = [1, 2, 3, 4, 5];

console.log(array);

//map method in array
const arr = array.map((elem) => elem + 2);
console.log(arr)

//filter method in array
const arr2 = array.filter((elem) => elem > 3);
console.log(arr2)

//reduce methof in array

const total = array.reduce((acc, cur) => acc + cur, 0);
console.log(total);

//find method in array

const firstNum = array.find((elem) => elem > 3);
console.log(firstNum);

//findIndex method of array => returns index of the first matched element else returns -1

const firstNumIndex = array.findIndex((elem) => elem > 30);
console.log(firstNumIndex);

//Some and Every methods of array

const data = array.some((elem)=>elem>3);
console.log(data);

let array2 = [2,2,2,2,2];

const data2 = array2.every((elem)=>elem>1);
console.log(data2)