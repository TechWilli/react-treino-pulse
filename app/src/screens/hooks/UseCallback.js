import React, { useState, useCallback } from 'react'

const LabelText = (props) => {

    const [hoverCount, increaseHoverCount] = useState(0);

    const doSomeStuff = useCallback(() => {
        console.log('hover count: ', hoverCount);
    }, [hoverCount]);

    return (
        <div
            onMouseOver={() => increaseHoverCount(hoverCount + 1)}
            onMouseLeave={doSomeStuff}
        >
            <h1>{props.children}</h1>
        </div>
    );
}

const UseCallbackExample = (props) => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <LabelText>You clicked {count} times</LabelText>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default UseCallbackExample;