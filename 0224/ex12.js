const person = {};

person.fName = "박";

Object.defineProperty(person,"lName",{
    value:'길동',
    writable: true,
    enumerable: false,
    configurable: false,
})

Object.defineProperty(person,"age",{
    value: 20,
})

person.lName = "동길";
console.log(person.lName);

delete person.lName;
console.log(person.lName);

// const 프로퍼티s = Object.getOwnPropertyDescriptors(person);
// console.log(프로퍼티s);

// console.log(person.fName);
// console.log(person.lName);
// console.log(person.age);

// for (const key in person) {
//     console.log(key)        
//     }
