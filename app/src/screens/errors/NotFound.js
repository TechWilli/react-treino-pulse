import React from 'react'
import styled from 'styled-components'

const ErrorCode = styled.h1`
    margin-left: auto;
    margin-right: auto;
    font-size: 300px !important;
`

const ErrorDescription = styled.h4`
    margin-left: auto;
    margin-right: auto;
    font-size: 30px !important;
`

export default () => (
    <div className="row h-100">
        <div className="col-12 text-center h-75 d-flex align-items-center">
            <ErrorCode>404</ErrorCode>
        </div>
        <div className="col-12 text-center h-25 d-flex align-items-start">
            <ErrorDescription>Página não encontrada</ErrorDescription>
        </div>
    </div>
)