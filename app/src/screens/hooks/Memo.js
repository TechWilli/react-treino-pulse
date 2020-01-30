import React, { useState, memo } from 'react'

const cardStyle = {
    boder: '1px solid #f3f3f3',
    boderRadius: '.15rem',
    boxShadow: '5px 5px 10px 2px rgba(0,0,0,0.2)',
    padding: '5px',
    position: 'absolute',
    width: '30%',
    top: '20%',
}

const Card = memo((props) => {
    console.log('rendering child');

    return (
        <div style={cardStyle}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
});

const MemoExample = (props) => {
    console.log('rendering parent')
    const [count, setCount] = useState(0);

    return (
        <div onClick={() => setCount(count + 1)}>
            <Card
                title='Card memo'
                description='Card body'
            />
        </div>
    );
}

export default MemoExample;