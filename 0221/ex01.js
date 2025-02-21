//for 일반
//forEach()  //반환값이 없다
//map()      //반환값이 있다

//[1,2,3,4,5] 출력해라

// const arr = [1,2,3,4,5];

// for(var i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//배열 안에 있는 요소를 가지고 와서 어떤 동작 수행하고 끝나는 함수
const result = [1,2,3,4,5].forEach((item) => { console.log(item)});
cosole.log(result);

//배열 안에 있는 요소를 가지고 와서 어떤 동작을 수행하고 반환되는 값이 있는 함수
const result2 = [1,2,3,4,5].map((item) => { console.log(item)});
console.log(result2.join(''));

const arr = ['안녕','금요일이야','ㅎㅎㅎ'];
const str = arr.join();

console.log(arr);
console.log(str);
console.log(typeof(arr));
console.log(typeof(str));
