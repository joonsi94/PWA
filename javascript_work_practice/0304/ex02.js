
const isLoggedIn = true || "사용자";
console.log(isLoggedIn); // "사용자"
console.log(typeof isLoggedIn); // true

console.log(Boolean("true"));
console.log(Boolean(""));

const a = ""&&"test";
console.log(`a = ${a}`);

console.log(Boolean({}));
console.log(Boolean([]));