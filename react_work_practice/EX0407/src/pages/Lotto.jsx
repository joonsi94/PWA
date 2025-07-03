import React, {useEffect, useRef, useState} from 'react';


function Lotto(props) {
    const [drwNo, setDrwNo] = useState(0)
    const [numbers, setNumbers] = React.useState([]);
    const [myNumbers, setMyNumbers] = React.useState([]);
    const inputRef = useRef(null);
    const [bonusNo, setBonusNo] = useState(0);
    const [drwDate, setDrwDate] = useState(0);
    const [firstAccumamnt, setFirstAccumamnt] = useState(0);
    const [firstPrzwnerCo, setFirstPrzwnerCo] = useState(0);
    const [firstWinamnt, setFirstWinamnt] = useState(0);
    const [totSellamnt, setTotSellamnt] = useState(0);

    async function getMyNumbers() {
        // const arr = [...new Array(6)].map(
        //     (_, i) => Math.trunc(Math.random()*46)+1
        // );
        const arr = new Set();
        do {
            arr.add(Math.trunc(Math.random() * 46) + 1);
        } while (arr.size !== 6);
        console.log(arr);
        setMyNumbers([...arr]);
    }

    async function getNumbers(numbers) {

        // fetch(`/api/common.do?method=getLottoNumber&drwNo=${1165}`)
        // .then(text => text.json())
        // .then(json => {setNumbers([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6])})

        const inputValue = inputRef.current.value || 1166;
        console.log(inputValue);
        //로또 서버에 가서 1166회차 가져와
        const text = await fetch(`/api/common.do?method=getLottoNumber&drwNo=${inputValue}`);
        //가져왔는데이터 text -> json 객체로 바꿔줘
        const res = await text.json();
        //바꿔준걸 출력해줘
        console.log(res);
        setNumbers([res.drwtNo1, res.drwtNo2, res.drwtNo3, res.drwtNo4, res.drwtNo5, res.drwtNo6]);
        setBonusNo([res.bnusNo])
        setDrwDate([res.drwNoDate])
        setDrwNo([res.drwNo])
        setFirstAccumamnt(res.firstAccumamnt.toLocaleString('ko-KR'))
        setFirstPrzwnerCo(res.firstPrzwnerCo)
        setFirstWinamnt(res.firstWinamnt.toLocaleString('ko-KR'))
        setTotSellamnt(res.totSellamnt.toLocaleString('ko-KR'))
    }

    // function BallDisplay({ numbers, bonusNo }) {
    const getBallStyle = (numbers) => {
        if (numbers < 11) {
            {
                backgroundColor: '#ff4242'
            }
            ;
        } else if (numbers < 21) {
            {
                backgroundColor: '#ffa742'
            }
            ;
        } else if (numbers < 31) {
            {
                backgroundColor: '#3184fa'
            }
            ;
        } else if (numbers < 41) {
            {
                backgroundColor: '#47e149'
            }
            ;
        } else {
            {
                backgroundColor: '#a560fa'
            }
            ;
        }
    };
    // }
    useEffect(() => {
        getNumbers();
    }, []);

    return (
        <div>
            <h1>LOTTO</h1>
            <h1>{drwNo}회차</h1>
            <h2>{drwDate}</h2>
            <input type="text" ref={inputRef} style={{marginRight: '10px'}}/>
            <button onClick={getNumbers}>조회</button>
            <button onClick={() => setDrwNo((drwNo)=>drwNo-1)} style={{float: 'left', marginRight: '10px'}}>◀</button>
            <button onClick={() => setDrwNo((drwNo)=>drwNo+1)} style={{float: 'right', marginLeft: '10px'}}>▶</button>
            <div style={{display: 'flex', gap: '1rem', margin: '1rem 0'}}>
                {numbers.map(number => (
                    <div
                        style={{
                            lineHeight: '1.8rem',
                            textAlign: 'center',
                            borderRadius: '50%',
                            backgroundColor: 'aqua',
                            width: '2rem',
                            height: '2rem',
                            ...getBallStyle(numbers)
                        }}
                        key={number}>{number}</div>
                ))}+
                <div style={{
                    lineHeight: '1.8rem',
                    textAlign: 'center',
                    borderRadius: '50%',
                    backgroundColor: 'aqua',
                    width: '2rem',
                    height: '2rem',
                    ...getBallStyle(bonusNo)
                }}>{bonusNo}</div>
            </div>
            <button onClick={getMyNumbers}>추첨</button>
            <div style={{display: 'flex', gap: '1rem'}}>
                {myNumbers.map(number => (
                    <div
                        style={{
                            marginTop: '1rem',
                            lineHeight: '1.8rem',
                            textAlign: 'center',
                            borderRadius: '50%',
                            backgroundColor: 'aqua',
                            width: '2rem',
                            height: '2rem',

                        }}
                        key={number}>{number}</div>
                ))}
                {/*+<div></div>*/}
            </div>
            <div>
                <h2>총 당첨금 : {firstAccumamnt}원</h2>
                <h2>1등 당첨자 수 : {firstPrzwnerCo}명</h2>
                <h2>1개당 당첨금 : {firstWinamnt}원</h2>
                {/*<h2>실수령액 : {firstWinamnt*33%}원</h2>*/}
                <h2>총 판매수량 : {totSellamnt}장</h2>
            </div>
        </div>
    )
        ;
}

export default Lotto;