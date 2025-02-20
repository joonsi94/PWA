//filter reduce
//boolean 반환값에 따라서 필터링 하는 것

const test = [
    {name:"홍길동", gender:"남자"},
    {name:"명희", gender:"여자"},
    {name:"김철수", gender:"남자"},
].filter(obj => obj.gender==='남자')
console.log(test);

const result = [1, 2, 3, 4, 5].filter((item) => {
    console.log('test' + item)
    //무조건적으로 item 변환 되어서 배열로 만든다
    // return true;
    return item % 2 == 0;
    //false, true, false, true, false -> true인 값만 출력
});
console.log(result);