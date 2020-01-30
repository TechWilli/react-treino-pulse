import React, { memo } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import Icon from "../../icons/Icon/Icon";
import InputText from "../../inputs/InputText/InputText";
import ReactTooltip from 'react-tooltip'

const TooltipGlobalSearch = styled(ReactTooltip)`
    background-color: #D5E7F5 !important;
    height: 10% !important;
    opacity: 1 !important;
    top: 8% !important;
    width: 21vw !important;
    left: 65% !important;
    box-shadow: 0px 3px 6px #00000029 !important;

    &:after {
        border-bottom-color: #D5E7F5 !important;
        left: 5vw !important;
        width: 8%;
        border-bottom-width: 12px !important;
    }

    &.place-bottom:after {
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        top: -12px;
        margin-left: -10px;
    }
`

const GlobalSearch = memo(({theme}) => {
    return (<>
        <Icon
            data-tip
            data-event='click'
            data-for="core-global-search-tooltip"
            name="search-interface-symbol"
            size="23" color={theme && theme.secondaryColor}
            clickable
        />
        <TooltipGlobalSearch
            id="core-global-search-tooltip"
            place="bottom"
            type="light"
            effect="solid"
            globalEventOff='click'
            clickable={true}
        >
            <InputText label="o que está procurando?" />
        </TooltipGlobalSearch>
    </>);
})

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.ThemeReducer.theme
    };
}

export default connect(mapStateToProps, null)(GlobalSearch)