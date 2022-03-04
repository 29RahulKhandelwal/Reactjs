// const number=1; //this is a primitive type
// const num2=number;

// console.log(num2);

// const person={
//     name:"Rahul"
// };
// const secondPerson=person;
// console.log(secondPerson); //output Rahul

// person.name="Lol";
// console.log(secondPerson); //output Lol

const person={
    name:"Rahul"
};
const secondPerson={
    ...person
};
console.log(secondPerson); //output Rahul

person.name="Lol";
console.log(secondPerson); //output Rahul


