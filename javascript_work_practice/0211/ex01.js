// var a =[1,2,3,4,5];
// a.reverse();
// console.log(a);
//
// var b =[1,2,3,4,5,6];
// b.reverse();
// console.log(b);

var a = 10;
var b = 20;

var temp = a;
a = b;

console.log(a);
console.log(b);
console.log(temp);

function solution(num_list) {
  //var reverse_list = num_list.reverse();
  //a[num_list.length-1]
  // if(num_list.length % 2 == 0) {
  for (var i = 0; i <= parseInt(num_list.length / 2); i++) {
    var temp = num_list[i];
    num_list[i] = num_list[num_list.length - (i + 1)];
    num_list[num_list.length - (i + 1)] = temp;
  }
  console.log(num_list);
  //길이가 8이면 2 나누었을 때 4인데..
  //4번 바꾸면 됩니다.
  //길이가 5이면 2로 나누었을 때 2.5인데
  //2번 바꾸면 됩니다. parseInt()
  //길이가 6이면 2로 나누었을 때 3인데
  //3번 바꾸면 됩니다.
  //6개 들어왔다
  //[1,2,3,4,5,6]
  //0이랑 5번 바꿈
  // num_list[0] = num_list[num_list.length - 1];
  // var temp = num_list[0];
  // num_list[1] = num_list[num_list.length - 2];
  //
  // num_list[2] = num_list[num_list.length - 3];

  // }
  // else{
  //
  // }
  return num_list;
}

solution([1, 2, 3, 4, 5, 6]);
