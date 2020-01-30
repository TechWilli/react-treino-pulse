import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import Icon from "../../icons/Icon/Icon";
import ReactTooltip from 'react-tooltip'

const TooltipQuickActions = styled(ReactTooltip)`
    background-color: ${props => props.theme && props.theme.backgroundColor}; !important;
    height: 10% !important;
    opacity: 1 !important;
    top: 8% !important;
    width: 12vw !important;
    height: 23.75vh !important
    box-shadow: 0px 3px 6px #00000029 !important;
    padding-top: .25rem !important;
    padding-bottom: .25rem !important;
    padding-left: 0px !important;
    padding-right: 0px !important;

    &:after {
        border-bottom-color: ${props => props.theme && props.theme.backgroundColor} !important;
        border-bottom-width: 12px !important;
    }

    &.place-bottom:after {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        top: -12px;
        margin-left: -10px;
    }

    &.place-bottom:after {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        top: -12px;
        margin-left: -10px;
    }
`
const TooltipContent = styled.div`
    height: 100%;
`

const QuickItem = styled.li`
    background-color: ${props => props.theme && props.theme.backgroundColor} !important;
    height: 5.5vh !important;
    border: none !important;

    &:hover {
        background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
        cursor: pointer;
    }
`

const QuickActions = props => {

    const {theme} = props;

    return (
        <>
            <Icon
                data-tip
                data-event='click'
                data-for="core-quick-actions-tooltip"
                className="align-middle"
                name="lamp-icon" size="20"
                color="#909090"
                clickable
            />
            <TooltipQuickActions
                theme={theme}
                id="core-quick-actions-tooltip"
                place="bottom"
                type="light"
                effect="solid"
                globalEventOff='click'
                clickable={true}
            >
                <TooltipContent>
                    <ul className="list-group">
                        <QuickItem theme={theme} className="list-group-item">
                            <p className={'align-top m-0'}>ação rápida</p>
                        </QuickItem>
                        <QuickItem theme={theme} className="list-group-item">
                            <p className={'align-top m-0'}>ação rápida</p>
                        </QuickItem>
                        <QuickItem theme={theme} className="list-group-item">
                            <p className={'align-top m-0'}>ação rápida</p>
                        </QuickItem>
                        <QuickItem theme={theme} className="list-group-item">
                            <p className={'align-top m-0'}>ação rápida</p>
                        </QuickItem>
                    </ul>

                </TooltipContent>
            </TooltipQuickActions>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.ThemeReducer.theme
    };
}

export default connect(mapStateToProps, null)(QuickActions)