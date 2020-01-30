import React, { useState } from 'react'

/*Ao inicar esse  projeto lembrar de dar um npm install
 para baixar a pasta node module*/

const UseStateExample = (props) => {
    // let initialValue = 0;
    const [count, setCount] = useState(0);

    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <div>
            <p>COUNTER: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 5)}>+5</button>

            <p>___________________________________________________</p>

            <form>
                Nome:<input
                    placeholder='Digite seu nome...'
                    type='text'
                    value={name.firstName}
                    onChange={(e) => setName({ ...name, firstName: e.target.value })}
                />
                <br />
                Sobrenome:<input
                    placeholder='Digite seu sobrenome...'
                    type='text'
                    value={name.lastName}
                    onChange={(e) => setName({ ...name, lastName: e.target.value })}
                />

                <h3>{name.firstName} {name.lastName}</h3>
            </form>
        </div>
    );
}

export default UseStateExample;