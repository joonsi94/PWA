import {useState} from 'react'
import './App.css'
// import Button from "./components/Button.jsx";
import {Card} from "./components/Card.jsx";
import ComboBox from "./components/ComboBox.jsx";
import Stack from '@mui/material/Stack';
import MButton from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import BasicRating from "./components/BasicRating.jsx";
import {Button, Divider} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <Divider></Divider>
                <Divider>Text</Divider>
                <Divider orientation="left">Left Text</Divider>
                <Divider orientation="right">Right Text</Divider>
                <CaretRightOutlined/>
                <Button type="primary">내생각대로 되지 않는다...</Button>
                <BasicRating/>
                <Checkbox defaultChecked/>
                <Stack spacing={2} direction="row">
                    <MButton variant="text">집에</MButton>
                    <MButton variant="contained">가고</MButton>
                    <MButton variant="outlined">싶다</MButton>
                </Stack>
            </div>
            <ComboBox></ComboBox>
            <Card>TEST</Card>
            <Card primary>TEST</Card>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </>
    )
}

export default App
