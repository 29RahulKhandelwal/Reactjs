const numbers=[1,2,3];
const newNumber=[...numbers,9,87,5];

console.log(newNumber);

const fname={
    name:"Rahul"
};
const lname={
    ...fname,
    lname:"Rahul"
};

console.log(lname);