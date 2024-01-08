console.log("Everything about Array in Js");

let array = ["alam",21,true,{name:"alam",address:"Bongaigaon"}];

console.log(array);

//Implementation of Array destructing
let [a,,,b] = array;

[a,b]=[b,a]; //swapping elements uisng array destructing

console.log(a,b);

//Nested Array destructing

let arr = [1,2,["alam","kalam"]];

[x,z,[,y]] = arr;

console.log(x,y,z);

//Default values of variable while destructureing

let products = ["MackBook Air","Asus VivoBook"];

[a,b,c="Hp pavilion"] = products;

console.log(a,b,c);


//Note: 
//"It is commonly used to avoid getting undefined values while array destructing"