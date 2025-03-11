//pop()꺼내다
// const a =[0,1,1,1,0];
// const result = a.pop();
// console.log(result);
// console.log(a);

// console.log(a.pop());
// console.log(a);

function solution(arr){
    var stk = 0;
    for(let i = 0; i < arr.length; i++){
        if(stk.length == 0){
            stk.push(arr[i]);
        }else if(stk[stk.length - 1] == arr[i]){
            stk.pop();
        }else if(stk[stk.length - 1] != arr[i]){
            stk.push(arr[i]);
        }
    }
    if(stk.length == 0)
        return [-1];
    return stk;
}

const ret = solution([0,1,1,1,0])
console.log(ret)