function solution(num_list) {
    var aa = 0;
    var bb = 1;
    for (let i = 0; i < num_list.length; i++) {
        aa = aa + num_list[i];
        bb = bb * num_list[i];
    }
    if (aa **2 > bb) {
        return 1
    } else return 0
}

const ret = solution([3, 4, 5, 2, 1]);
console.log(ret);
const ret2 = solution([5, 7, 8, 3]);
console.log(ret2);