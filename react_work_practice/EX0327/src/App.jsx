import { useEffect, useState } from 'react'
import './App.css'
import AA from './components/AA'
import BB from './components/BB';

//App컴포넌트
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('홍길동');

  //처음에 한번 호출 되고 count 값이 변경될 때마다 콜백함수 호출
  useEffect(() => {
    setCount(Number(localStorage.getItem('count')));
    console.log("UseEffect 호출됨");
  }, [])

  const addCount = () => { setCount(count + 1), localStorage.setItem('count', count + 1) };
  const subCount = () => { setCount(count - 1) }
  const changeName = () => { setName(name - '!') }

  // AA 함수가 새로 호출됨.
  return (
    <>
      <BB addCount={addCount}></BB>
      <AA aa="10" bb={20}></AA>
      <h1>name = ${name}</h1>
      <button onClick={changeName}>이름변경</button>
      <h1>count = {count}</h1>
      <button onClick={addCount}>count증가</button>
      <button onClick={subCount}>count감소</button>
    </>
  )
}

export default App
