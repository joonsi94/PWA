import {useEffect, useRef, useState} from 'react'
import './App.css'
import Child from "./components/child.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [aa, setAa] = useState(10)
    
    //myRef는 값을 담는 용도
    //1.input창을 focus 하거나 값을 설정하는 용도로 사용가능
    const myRef = useRef(null);
    
    //inputRef느느 focus가는 용도 및 값출력
    //2.값을 가지고 있는 용도로도 사용가능
    const inputRef = useRef(null);
    const aRef = useRef(0);

    //최초에 한번만 로딩된다.
    //aa가 변경되면 또 호출해라
    useEffect(() => {
        console.log("부모 useEffect");
    }, [aa])

    return (
        <>
            <input type="number" ref={myRef}/>
            <button onClick={() => {
                myRef.current.focus();
                console.log(myRef.current.value);
            }}>포커스
            </button>
            <button onClick={(aRef) => {
                aRef.current = aRef.current + 1;
            }}>ref 변경 aref = {aRef.current}
            </button>
            <Child count={count}></Child>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <button onClick={() => setAa((count) => aa + 1)}>
                aa is {aa}
            </button>
        </>
    )
}

export default App
