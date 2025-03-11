function solution(price) {
    var answer = 0;
    if (100000<=price && price <= 299999) {
        aa = price * 0.05
    } else if (price >= 300000 && price <= 499999) {
        aa = price * 0.1
    } else if (price >= 500000) {
        aa = price * 0.2
    } else aa = 0
    return answer = price - Math.ceil(aa);
}

const ret = solution(150000);
console.log(ret);
const ret2 = solution(580000);
console.log(ret2);