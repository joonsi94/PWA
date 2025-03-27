import React, {useState} from 'react'
import CC from './components/CC'

function App1() {

    const [style, setStyle] = useState({
        border: "1px solid rgb(150,130,200)",
        borderRadius: '20px',
        padding: "30px",
        color: "rgb(30,30,30)",
        backgroundColor: "rgba(100,200,100,0.3)"
    })

    return (
        <>
            <div>
                <h1>App1</h1>
                <button onClick={()=>setStyle({...style,color:"blue"})}>파란색</button>
                <button onClick={()=>setStyle({...style,color:"red"})}>빨강색</button>
                <button onClick={()=>setStyle({...style,color:"white"})}>하얀색</button>
            </div>
            <CC style={style}>
                <h1>자식태그11</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat cum laudantium facilis quisquam! Animi at libero consequuntur cum ipsam aliquid inventore voluptas quae quaerat, error nulla amet ratione blanditiis ipsa!</p>
            </CC>
            <CC style={style}>
                <h1>자식태그22</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat cum laudantium facilis quisquam! Animi at libero consequuntur cum ipsam aliquid inventore voluptas quae quaerat, error nulla amet ratione blanditiis ipsa!</p>
            </CC>
            <CC style={style}>
                <h1>자식태그33</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat cum laudantium facilis quisquam! Animi at libero consequuntur cum ipsam aliquid inventore voluptas quae quaerat, error nulla amet ratione blanditiis ipsa!</p>
            </CC>
        </>
    )
}

export default App1