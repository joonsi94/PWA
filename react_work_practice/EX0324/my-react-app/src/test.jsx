import BB from "./BB";

function Test() {
    return(
    <>
        <div>
            {BB({ aa: 32, bb: 42})/*{BB()} 가독성 X*/}
            <BB aa="10" bb="20"></BB> {/* 가독성이 굳 */}
            <h1>TEST</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ipsa eum enim modi magnam sit voluptatum quas vero illo placeat cum optio, reprehenderit aliquid delectus odio maxime dolorum quisquam officiis.</p>
        </div>
    </>
    )
}

export default Test;