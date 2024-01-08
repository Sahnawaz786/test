//Spread Operator => unpacks all the elements

let arr = ["alam",1,true,{name:"sahnawaz alam"}];

const newArray = [...arr,"sabbaj"];

console.log(newArray);

//Rest Operator => Basically packs all the data in the array
//It must be the last element in the array otherwise it through errors 

let [a,b,...others] = [...arr];

console.log(a,b,others);