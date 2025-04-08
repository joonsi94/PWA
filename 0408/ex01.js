// const mysymbol1 = Symbol("mine");
// const mysymbol2 = Symbol("yours");

// console.log(mysymbol1 === mysymbol2);
// console.log(mysymbol1);
// console.log(mysymbol2);

// console.log(mysymbol1.description);

// console.log(typeof mysymbol1);

const aa = {};
aa.aaa = 10;
console.log(aa);

String.prototype.aaa = 30;
String.prototype.myfunction = ()=>{
    console.log('test');
};
console.log(String.prototype.aaa);

let a = "abcdef";
a= a.replace(/a/,"aaa");
console.log(a);
console.log(a.aaa);

a.myfunction();