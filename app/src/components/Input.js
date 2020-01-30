import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
    border: 1px solid '#333333';
    color: #333;
`;

const Input = (props) => {

    return (
        <div>
            <InputStyled
                onChange={props.onChangeHandler}
                placeholder='Digite alguma tarefa...'
                value={props.inputValue}
            />
        </div>
    );
}

export default Input;