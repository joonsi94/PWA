function deepFreeze(target) {
    //target이 객체 이고 freeze되지 않은 객체만 freeze한다.
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);

        Object.keys(target).forEach(key => {
            deepFreeze(target[key]);
        });
    };


    //return target;
}

const person = {
    name: 'LEE',
    addr: { city: 'seoul' },
    friends: { name: 'Park', addr: { city: "busan" } }
};

deepFreeze(person);

person.addr.city = 'busan';
console.log(person);

// const keys = Object.keys(person);
// console.log(keys);


//추가 x 삭제 o 프로퍼티 값 변경 o
// obbjct.preventExtnsion(person);

//추가 x 삭제 x 프로퍼티 값 변경 o
// Object.seal(person);

//추가 x 삭제 x 프로퍼티 값 변경x
// Object.freeze(person);
// Object.freeze(person.addr);
// Object.freeze(person.friends.addr);

// person.addr.city = 'busan';
// console.log(person);

//무시 된다
// person.age = 20
// console.log(person);

// person.name = "PARK"
// console.log(person);

// const ret = crossOriginIsolated.log(person);
// console.log(ret);