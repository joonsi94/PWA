const person = {
    name: "aaa",
    age: 30,
    addr: "daegu"
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log();

//객체는 for in 으로 순회한다.
//배열은 for of 으로 순회한다.

for (const element of Object.keys(person)){
    console.log(element);
}
for (const element of Object.values(person)){
    console.log(element);
}
for (const [key, value] of Object.entries(person)){
    console.log(`key ${key}`);
    console.log(`value ${value}`);
}

const arr = [10,20,30];
const [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);