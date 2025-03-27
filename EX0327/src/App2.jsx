import React, { useState } from 'react'
import DD from './components/DD'

function App2() {

    const [count, setCount] = useState(0);
    console.log("App2 랜더링 됨")

    const style = {
        border: "1px solid rgb(150,130,200)",
        borderRadius: '20px',
        padding: "30px",
        color: "rgb(30,30,30)",
        backgroundColor: "rgba(100,200,100,0.3)"
    }

    // ctrl + d 같은 문자 선택
    // ctrl + e 다른 파일로 변경
    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>랜더링 이루어짐</button>
            <div>
                <h1>App1</h1>

            </div>
            <DD style={style}>
                <h1>자식태그11</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat cum laudantium facilis quisquam! Animi at libero consequuntur cum ipsam aliquid inventore voluptas quae quaerat, error nulla amet ratione blanditiis ipsa!</p>
            </DD>
            <DD style={style}>
                <h1>자식태그22</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat cum laudantium facilis quisquam! Animi at libero consequuntur cum ipsam aliquid inventore voluptas quae quaerat, error nulla amet ratione blanditiis ipsa!</p>
            </DD>
            <DD style={style}>
                <h1>자식태그33</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat cum laudantium facilis quisquam! Animi at libero consequuntur cum ipsam aliquid inventore voluptas quae quaerat, error nulla amet ratione blanditiis ipsa!</p>
            </DD>
        </>
    )
}

export default App2