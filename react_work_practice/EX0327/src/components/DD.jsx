import React, {useState} from 'react'

function DD({ style, children }) {

    const [childStyle,setChildStyle] = useState(style);
    
    return (
        <>
            <button onClick={() => setChildStyle({ ...style, color: "blue" })}>파란색</button>
            <button onClick={() => setChildStyle({ ...style, color: "red" })}>빨강색</button>
            <button onClick={() => setChildStyle({ ...style, color: "white" })}>하얀색</button>
            <div style={childStyle}>
                <div>DD</div>
                {children}
            </div>
        </>
    )
}

export default DD