
function solution(numbers){
    // console.log(aa);

    var max_one = numbers[0];
    var max_two = numbers[1];

    for(var i = 0; i < numbers.length; i++){
       if(numbers[i] > max_one){
           max_two = max_one;
           max_one = numbers[i];
           // console.log(`max_one: ${max_one}`);
           // console.log(`numbers: ${numbers[i]}`);
       }
       if(numbers[i] > max_two && numbers[i] < max_one){
           max_two = numbers[i];
       }
    }
    console.log(`max_one: ${max_one}`);
    console.log(`max_two: ${max_two}`);
    return max_one * max_two;
}

const ret = solution([100,20,70,40,150,200])
console.log(ret)