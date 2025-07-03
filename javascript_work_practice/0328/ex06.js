class Users{
    constructor(users){
        this.users = users;
    }

    findById(id){
        const user = this.users.filter(item => item.id == id);
        console.log(user);
    }

    remove(id){
        this.users = this.users.filter((item)=> item.id != id);
    }
}

const myUsers = new Users([
    {id:1, name:"홍길동"},
    {id:2, name:"박길동"},
    {id:3, name:"이길동"}
]);

console.log(myUsers);
myUsers.findById(3);

myUsers.remove(2);
console.log(myUsers);

// const users = [
//     {id:1, name:"홍길동"},
//     {id:2, name:"박길동"},
//     {id:3, name:"이길동"}
// ]

//1.요소 추출
//id가 2번인거 추출
// function findById(id){
//     const user = users.filter(item => item.id == id);
//     console.log(user);
// }

// findById(3);

//2.요소 제거

// function remove(id){
//     const user = users.filter(item => item.id == id);
//     console.log(user);
// }

// remove(2);
// console.log(users);