import React, { useEffect, useState } from 'react';
import './App.css';

function App1(props) {
    const [lottoData, setLottoData] = useState(null);
    const [drwNo, setDrwNo] = useState(1165); // Initial draw number

    useEffect(() => {
        fetch(`/api/common.do?method=getLottoNumber&drwNo=${drwNo}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLottoData(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [drwNo]);

    const getBallColor = (number) => {
        if (number <= 10) return 'yellow';
        if (number <= 20) return 'blue';
        if (number <= 30) return 'red';
        if (number <= 40) return 'gray';
        return 'green';
    };

    const handleNext = () => {
        setDrwNo(prevDrwNo => prevDrwNo + 1);
    };

    const handlePrev = () => {
        setDrwNo(prevDrwNo => prevDrwNo - 1);
    };

    if (!lottoData) {
        return <div>Loading...</div>;
    }

    const { drwNoDate, drwtNo1, drwtNo2, drwtNo3, drwtNo4, drwtNo5, drwtNo6, bnusNo, firstWinamnt, firstPrzwnerCo } = lottoData;

    return (
        <div>
            <div className="title">로또 6/45</div>
            <div className="round">{drwNo}회 당첨결과</div>
            <div className="date">({drwNoDate} 추첨)</div>

            <div className="numbers">
                <div className="ball" style={{ backgroundColor: getBallColor(drwtNo1) }}>{drwtNo1}</div>
                <div className="ball" style={{ backgroundColor: getBallColor(drwtNo2) }}>{drwtNo2}</div>
                <div className="ball" style={{ backgroundColor: getBallColor(drwtNo3) }}>{drwtNo3}</div>
                <div className="ball" style={{ backgroundColor: getBallColor(drwtNo4) }}>{drwtNo4}</div>
                <div className="ball" style={{ backgroundColor: getBallColor(drwtNo5) }}>{drwtNo5}</div>
                <div className="ball" style={{ backgroundColor: getBallColor(drwtNo6) }}>{drwtNo6}</div>
            </div>
            <div className="numbers">
                <div className="plus-sign">+</div>
                <div className="ball" style={{ backgroundColor: getBallColor(bnusNo) }}>{bnusNo}</div>
            </div>
            <div className="result">
                <button onClick={handlePrev} className="result-button">Prev</button>
                <div className="result-box">
                    <div>1등 총 당첨금</div>
                    <div className="amount">{firstWinamnt ? firstWinamnt.toLocaleString() : 'N/A'}원</div>
                    <div className="sub">({firstPrzwnerCo ? firstPrzwnerCo.toLocaleString() : 'N/A'}명)</div>
                </div>
                <button onClick={handleNext} className="result-button">Next</button>
            </div>

            <div className="buttons">
                <button className="btn btn-gray">회차별 결과</button>
                <button className="btn btn-green">구매하기</button>
            </div>
        </div>
    );
}

export default App1;