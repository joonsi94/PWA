const arr = [1, 2, 3, 4, 5];

//filter라는 함수를 써서 출력할 값 - 1,3,5

// return true item 반환
// return false 이면 반환하지 않음
// 반환된 것을 배열로 만들기
console.log(Boolean(1));
console.log(Boolean(0));

const brr = arr.filter((element) => {
    console.log(`element = ${element}`);
    return element % 2
    //     =
    // return element % 2 == 1;
});

console.log(brr);