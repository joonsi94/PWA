import {useState} from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./layout/Header.jsx";
import Home from "./pages/Home.jsx";
import Lotto from "./pages/Lotto.jsx";
import MyPage from "./pages/MyPage.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Vite + React</h1>
            <Header></Header>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/lotto" element={<Lotto/>}></Route>
                <Route path="/mypage" element={<MyPage/>}></Route>
            </Routes>
            <div className="card">
                {/* setCount 화면 재랜더링해라 */}
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
