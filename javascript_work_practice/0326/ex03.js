class Queue{

    constructor(arr = []){
        this.arr = arr
    }

    //넣는거
    enque(){
        this.arr.push(item);
    }

    //빼는거
    deque(){
        return this.arr.shift();
    }

    // 복사하는거
    entries(){
        return [...this.arr]
    }
}

const que = new Queue([10,20,30]);
console.log(que);
que.enque(40);

console.log(que);
const retValue = que.deque();
console.log(retValue);
console.log(que);