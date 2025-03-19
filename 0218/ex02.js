

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    //8,9 = 72
    var max = denom1 * denom2;
    var i = 2;
    //1<=72
    while (i <= max) {
        if (i % denom1 == 0 && i % denom2 == 0) {
            console.log(i);
            break;
        }
        i++;
    }

    return answer;
}

solution(1, 2, 3, 4)
// solution(10, 20, 5, 10)