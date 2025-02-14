const obj = { name: "홍길동", addr:"서울" };
console.log(obj);

const obj2 = {...obj};
console.log(obj2);

//객체 타입 배열 타입에서만 쓸 수 있음...

const arr = [10, 20, 30];
console.log(arr);
console.log(...arr);