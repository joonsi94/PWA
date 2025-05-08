const odd = "홀수 입니다";
const even = "짝수 입니다";

console.log('var.js')

//module 사용법


module.exports = {
    odd,
    even
}

module.exports = () => {
    console.log("함수 보냄");
}