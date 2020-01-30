import React from 'react'
import styled from 'styled-components'

const WelcomeTitle = styled.h1`
    font-size: 180px !important;
    font-weight: 200 !important;
`

const WelcomeSubtitle = styled.h4`
    font-size: 30px !important;
`

export default props => (
    <div className="row h-100">
        <div className="col-12 h-60 d-flex align-items-center">
            <WelcomeTitle>Bem-vindo!</WelcomeTitle>
        </div>
        <div className="col-12 h-40 d-flex align-items-start">
            <WelcomeSubtitle>
                Treinamento de React Hooks e Redux da Pulse
            </WelcomeSubtitle>
        </div>
    </div>
)