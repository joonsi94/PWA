function solution(a, b) {
    function gcd(a,b){
        if(b==0)return a;
        return gcd(b,a%b)
    }

    let aa = gcd(b,a%b)
    let bb = a*b/gcd(a,b)

    return [aa, bb]
}

const ret = solution(3, 12)
console.log(ret)
// const ret2 = lcm(3, 12)
// console.log(ret2)

// //최대 공약수
// function gcd(a, b) {
//     if (b == 0) return a;
//     return gcd(b, a % b)
// }

// //최소 공배수
// function lcm(a,b){
//     return a*b/gcd(a,b)
// }