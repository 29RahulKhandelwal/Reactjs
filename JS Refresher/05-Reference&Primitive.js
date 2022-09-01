// premitive
// const num=1;
// const num2=num;
// console.log(num2) // copied num value into num2 o/p:1
// num=2;

// Object and arrays are reference types
const person={
    name:"Rahul"
}
const secondPerson=person
// secondPerson will print same value as the person but it will not actually have copied the person instead person the object is stored in memory and in the constant person we store a pointer to that place in memory, and if we then assign person to secondperson that pointer will be copied 
console.log(secondPerson.name)

person.name="ABC"
console.log(person.name)            //ABC
console.log(secondPerson.name)      //ABC
