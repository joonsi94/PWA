const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(0, 3));
console.log(arr.slice(2, 4));

function doA() {
    const a = "10"
    const b = a;

    //얕은 복사
    const arr = [...arguments];
    const brr = arr;

    //깊은 복사
    const crr = [...arr];

    console.log('arr == brr');
    console.log(arr == brr);

    console.log('arr == crr');
    console.log(arr == crr);
    
    console.log(arguments);
    //map 함수 - 새로운 것을 리턴하게 되면 배열로 변환
    const result = [...arguments].map((item, index) => {
        console.log(item);
        console.log(`index = ${index}`);
        return `<div>item = ${item}</div>`;
    })

    // 화살표 함수에서 객체(=함수)가 리턴될 때는 () 소괄호 사용
    const result1 = [...arguments].map((item, index) => (
        `<div>item = ${item}</div>`
    ))

    console.log(result);
    console.log(result1);
}

doA(1, 2, 3, 4, 5);