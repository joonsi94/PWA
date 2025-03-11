const obj = Object.create(null);
console.log(obj.__prototype__);

// ES5 __prototype__ get 메서드 
// ES6

const obj2 = {};
console.log(obj2.__prototype__);
console.log(Object.getPrototypeOf(obj));