const arr = [1, 2, 3, 4, 5, 6];
const test = arr.filter((item, index) => index != 3);

console.log(test);

const review = [
    { uid: '123123123', title: "abcd" },
    { uid: '123123123', title: "aaaa" },
    { uid: '123123123', title: "ttie" }
]
// {} 적으면 return 생략 불가, 장점:여러줄을 한번에 쓸 수 있다
const filterReview =
    review.filter((item) => { 
        console.log(`item = ${JSON.stringify(item)}`);
        return item.title.includes('a');
     });

console.log(filterReview);