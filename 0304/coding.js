function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var min = numer1 * denom2 + numer2 * denom1
    var max = denom1 * denom2;
    var total = min/max
    var i = 2;

    while (i <= max) {
        if (min % i == 0 || max % i == 0) {
            total = total*i
            i++
        }
        answer = [min, max]
    }

    return answer;
}

const ret = solution(1, 2, 3, 4)
console.log(ret)