import React, { useState, useEffect } from 'react'

const UseEffectExample = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Mensagem exibida após o componente ser montado')
    }, []); // simulando o componentDidMount passando um array vazio

    useEffect(() => {
        console.log(`Você clicou ${count} vezes no botão`);
    }, [count]);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default UseEffectExample;