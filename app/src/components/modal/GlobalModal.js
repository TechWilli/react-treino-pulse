import React, { Component } from 'react';

import './Modal.css';

//temas
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import SimpleButton from '../buttons/SimpleButton';
import GlobalModalActions from './GlobalModalActions';

import Frame from '../frame/FrameComponent';

const ModalTitle = styled.h4`
    color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
`

const ModalTitleMinimized = styled.h6`
    color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
`

const MDBModalBlindStyle = createGlobalStyle`
    .modal-content {
        background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
    }

    .overlay-global-redux {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1100;
    }

    div.global-modal-actions button {    
        background-color: transparent;
        border: none;
        outline: 0;
    }

    div.global-modal-actions button i{        
        color: #979797;
    }
    
    div.global-modal-actions button:hover i{        
        color: #c5c5c5;
    }

    .modal-w-10 {
        width: 10%;
    }

    .modal-w-20 {
        width: 20%;
    }

    .modal-w-30 {
        width: 30%;
    }

    .modal-w-40 {
        width: 40%;
    }

    .modal-w-50 {
        width: 50%;
    }

    .modal-w-60 {
        width: 60%;
    }

    .modal-w-70 {
        width: 70%;
    }

    .modal-w-80 {
        width: 80%;
    }

    .modal-w-90 {
        width: 90%;
    }

    .modal-w-100 {
        width: 100%;
    }

    .modal-h-10 {
        height: 10%;
    }

    .modal-h-20 {
        height: 20%;
    }

    .modal-h-30 {
        height: 30%;
    }

    .modal-h-40 {
        height: 40%;
    }

    .modal-h-50 {
        height: 50%;
    }

    .modal-h-60 {
        height: 60%;
    }

    .modal-h-70 {
        height: 70%;
    }

    .modal-h-80 {
        height: 80%;
    }

    .modal-h-90 {
        height: 90%;
    }

    .modal-h-100 {
        height: 100%;
    }

    .modal-footer {
        background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
    }
    
    .modal-header button span {
        color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
    }

    .minimized {
        position: fixed !important;
        max-height: 35vh;
        width: 25vw !important;
        right: 1vw !important;
        z-index: 1050;
        transition: width 0.5s linear 0s;
        transition: right 0.5s linear 0s;
    }

    .show {
        opacity: 1;
        transition: opacity .1s linear 0s;
    }

    .hide {
        opacity: 0;
        top: 0;
        transition: opacity 1s linear 0s;
    }

    .global-modal .card {
        max-width: 90vw !important;
        z-index: 1040;
    }

    .global-modal-title{
        border-bottom: 1px solid #dee2e6 !important;
    }

`

const ModalBodySection = styled.div`
	background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
`

class ModalRedux extends Component {

    state = {
        displayMinimizeIcon: false,
        content: null,
        minimized: false,
        initialContent: '',
        show: false,
        minimizable: false,
        backdropClose: false,
        canMinimizeFromCallback: false,
        minimizeCallback: () => { }
    }

    componentDidMount() {

        const { minimized, backdropClose, minimizeCallback } = this.props;

        const content = this.props.children

        this.setState({
            content,
            minimized: !minimized,
            backdropClose,
            minimizeCallback: !!minimizeCallback ? minimizeCallback : () => { },
        }, () => {
            setTimeout(() => {
                this.setState({ show: true })
            }, 50)
        })

    }

    minimize = minimized => this.setState({ minimized })

    close = () => this.props.closeGlobalModal(this.props.id)

    countMinimizedModals = id => {
        const { modals } = this.props;

        const modalIndex = modals.findIndex(modal => modal.identifier === id)

        let cont = 0;
        for (let i = 0; i < modalIndex; i++) {
            !modals[i].fullsize && cont++;
        }

        return cont;

    }

    minimizeCallback = canMinimize => {
        this.setState({
            canMinimizeFromCallback: this.props.minimizeCallback(canMinimize)
        })
    }

    render() {

        const {
            width,
            height,
            title,
            theme,
            id,
        } = this.props;

        const { content: C, minimized, show, minimizable, canMinimizeFromCallback } = this.state;

        let props = {}

        if (minimized) {
            props.style = {
                bottom: `${(this.countMinimizedModals(id) * 40) + 2}vh`
            }
        }

        return (
            <>
                <MDBModalBlindStyle theme={theme} />
                <div className={`${!minimized && "overlay-global-redux"} ${show ? 'show' : 'hide'}`}>
                    <div className="row w-100 global-modal h-100 m-0 align-items-center">
                        <div className={`col-12 ${!minimized && `modal-h-${Math.floor(height / 10) * 10}`}`}>
                            <div className={`card mx-auto 
                        my-auto 
                        ${!minimized && `modal-w-${Math.floor(width / 10) * 10}`}
                        h-100
                        ${minimized ? 'minimized' : 'fullsize'}
                        `}
                                {...props}
                            >
                                <ModalBodySection theme={theme} className={`row card-body ${!minimized && 'p-4'}`}>

                                    <div className="col-12 h-10">
                                        <div className={`row ${!minimized && 'p-3'}`}>
                                            {minimized && <div className="col-2 global-modal-actions">
                                                <button onClick={() => this.minimize(false)}>
                                                    <i icon="expand" />
                                                </button>
                                            </div>}
                                            <div className={!minimized ? "col-10" : "col-8"}>
                                                {!minimized ? <div className="card-title" theme={theme}>
                                                    {title}
                                                </div> : <ModalTitleMinimized theme={theme}>
                                                        {title}
                                                    </ModalTitleMinimized>}
                                            </div>
                                            <div className="col-2">
                                                <div className="row">
                                                    <div className="col-6 global-modal-actions">
                                                        {!minimized && ((minimizable || canMinimizeFromCallback) && <button onClick={() => this.minimize(true)}>
                                                            <i icon="window-minimize" />
                                                        </button>)}
                                                    </div>
                                                    <div className="col-6 global-modal-actions">
                                                        <button onClick={this.close}>
                                                            <i icon="times" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 h-90">
                                        <div className="row h-100">
                                            <div className="col-12">
                                                <Frame>
                                                    {C && <C theme={theme} minimizeCallback={this.minimizeCallback} />}
                                                </Frame>
                                            </div>
                                        </div>
                                    </div>
                                    {false && <div className="col-12">
                                        <div className="row float-right h-10">
                                            <SimpleButton>Cancelar</SimpleButton>
                                            <SimpleButton>Salvar</SimpleButton>
                                        </div>
                                    </div>}
                                </ModalBodySection>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

// Dispara o dispatch se passado como segundo parâmetro para o connect
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        minimize: id => dispatch(GlobalModalActions.minimize(id)),
        closeGlobalModal: id => dispatch(GlobalModalActions.closeGlobalModal(id)),
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.ThemeReducer.theme,
        modalContentRedux: state.GlobalModalReducer.content,
        modals: state.GlobalModalReducer.modals,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRedux);