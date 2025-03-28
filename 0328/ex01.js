// const arr = [10,2,5,1];
// arr.sort();
// console.log(arr);

function mysort(a, b) {
    // console.log(`a = ${JSON.stringify(a)}`);
    // console.log(`b = ${JSON.stringify(b)}`);
    return a.id - b.id ? 1 : a.id < b.id ? -1 : 0;
}
const todos = [
    { id: 4, content: "CSS" },
    { id: 2, content: "JAVASCRIPT" },
    { id: 1, content: "HTML" }
]

todos.sort(mysort);

console.log(todos);