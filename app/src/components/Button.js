import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    background-color: #E6A000;
    borer-color: #E6A000;
    color: #fff;
`;

const Button = (props) => {

    return (
        <div>
            <ButtonStyled onClick={props.btnOnClick}>
                {props.children}
            </ButtonStyled>
        </div>
    );
}

export default Button;