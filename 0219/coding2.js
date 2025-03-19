function solution(sides) {
        if (sides[0] + sides[1] >= sides[2]) {
            return 1
        } else if (sides[0] + sides[2] >= sides[1]) {
            return 1
        } else if (sides[1] + sides[2] >= sides[0]) {
            return 1
        } else {
            return 2
        }
    }

const res = solution([5, 7, 8])
console.log(res);