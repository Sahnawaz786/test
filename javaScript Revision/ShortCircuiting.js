//Short Circuiting Using OR(||) Operator
console.log(true || 0); //true
console.log(undefined || false); //false
console.log(undefined || false || '' || 83); //83

const res = {
    guestName:"sabbaj alam",
    age:20,
    Education:"NIT SILCHAR"
}

const guest1 = res.guestName ? res.guestName : "Sahnawaz Alam";

console.log(`Hello My dear guest ${guest1}`);

//Short Circuiting Using AND(&&) Operator

console.log(0 && "Jonas"); //0
console.log(7 && 'Alam'); //Alam

