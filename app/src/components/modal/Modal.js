import React, { Component } from 'react';

import './Modal.css';

//temas
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import ThemeActions from '../../../assets/themes/ThemeActions';
import SimpleButton from '../buttons/SimpleButton';
import Icon from '../icons/Icon/Icon';

const ModalGlobalStyle = createGlobalStyle`
    .modal-content {
        background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
    }

    .modal-footer {
        background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
    }
    
    .modal-header button span {
        color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
    }

    .overlay {
        background-color: rgba(0,0,0,.3);
        height: 100%;
        width: 100%;
        position: fixed;               
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .overlay.show {
        opacity: 1;
        z-index: 900; 
        transition: opacity 1s linear 0s;
    }

    .overlay.hide {
        opacity: 0;
        transition: opacity 1s linear 0s;
    }

    .core-modal-title{
        height: 10%;
    }

    .core-modal-content{
        height: 75%;
    }
    .core-modal-content-full{
        height: 90%;
    }
    
    .core-modal-footer{
        height: 15%;
    }
    
    .btn-close-modal {
        position: relative;
        top: 1vh;
        right: .5vw;
    }
`

const ModalArea = styled.div`
    box-shadow: 0px 3px 6px #00000029;
    background-color:  ${props => props.theme && props.theme.backgroundColor} !important;
    width: ${props => props.width}% !important;
    ${props => props.className.indexOf('core-modal-center') !== -1 && `height: ${props.height}% !important;`}

    &.core-modal-center {
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
    }

    &.core-modal-left {
        display: block;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
        height: 100% !important;
    }

    &.core-modal-right {
        display: block;
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        height: 100% !important;
    }
`

const ModalTitle = styled.h3`
    color:  ${props => props.theme && props.theme.textTertiaryColor} !important;
`

class Modal extends Component {

    state = {
        type: 'center'
    }

    componentDidMount() {

        const { type: modalType } = this.props;
        let type = 'modal-center';

        if (modalType === 'right') {
            type = 'modal-right';
        } else if (modalType === 'left') {
            type = 'modal-left';
        }

        this.setState({
            type
        })
    }

    checkBackdropClose = () => {
        const { backdropClose, toggle } = this.props;
        if (backdropClose) {
            toggle()
        }
    }

    render() {

        const { showModal, theme, width, height, toggle, onSave, title, children } = this.props;
        const { type } = this.state;
        console.log("THEME: ", theme)
        return (
            <>
                <ModalGlobalStyle theme={theme} />
                <div className={`overlay ${showModal ? 'show d-flex' : 'hide d-none'}`} onClick={this.checkBackdropClose}>
                    {showModal && <ModalArea
                        width={width}
                        height={height}
                        theme={theme}
                        className={`core-modal core-${type}`}
                    >
                        <Icon
                            className="float-right btn-close-modal"
                            name="close-button"
                            size="22"
                            color={theme.textSecondaryColor}
                            onClick={toggle}
                        />
                        <div className="h-100 p-3">
                            <div className="core-modal-title">
                                <ModalTitle className="mb-0" theme={theme}>{title}</ModalTitle>
                            </div>
                            <div className={`core-modal-content${!onSave && '-full'}`}>
                                {
                                    children
                                }
                            </div>
                            {
                                onSave && <div className="core-modal-footer">
                                    <SimpleButton className="float-right" onClick={onSave}>salvar</SimpleButton>
                                </div>
                            }
                        </div>
                    </ModalArea  >}
                </div>
            </>
        );
    }
}

// Dispara o dispatch se passado como segundo parâmetro para o connect
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        reduxGetTheme: () => dispatch(ThemeActions.getTheme())
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.ThemeReducer.theme
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);