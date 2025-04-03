const a = "abc";

console.log("abc".repeat(2));
//강제 종료 되면 종료 구문이 실행되지 않음
// console.log("abc".repeat(-1));

console.log("종료되었습니다.");

const str = "Hello Hello"; // hello hello

console.log(str.replace(/hello/i, 'LEE' ));

// 카멜케이스
let todoList; // -> todo_list

// 스네이크 케이스
let todo_list; // -> todoList