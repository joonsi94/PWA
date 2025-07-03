const obj = {aa:10};

console.log(obj.__prototype__);
console.log(Object.prototype);

console.log(Object.hasOwnProperty('aa'));
console.log(obj.hasOwnProperty('aa'));