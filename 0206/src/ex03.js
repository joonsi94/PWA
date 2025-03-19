function solution(slice, n) {

   // 성능저하(속도)는 디스크 입출력에서 느려짐
    var res = n/slice;

    res = parseInt(res);

    if (n % slice > 0){
        res = res +1;
    }

    return res;
}

const result = solution(7, 10);
console.log(`result = ${parseInt(result)}`);