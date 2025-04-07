console.log(new Date());
console.log(new Date(2025,3,18));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());

now.setMonth(3);
console.log(now);

now.setDate(0);
console.log(now);

console.log(Date.now());
console.log(new Date(Date.now()));
console.log(new Date());

console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());

const myDate = `${now.getFullYear()}/
${now.getMonth()+1}/
${now.getDate()}`;
console.log(myDate);