import React, { memo, useState, useCallback } from "react";
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom";

const MenuTitle = styled(Link)`
    text-decoration: none;
    color: #FFFFFF !important;
    padding: 0px !important;
    font-size: 1rem !important;
    border-bottom: 1px solid transparent !important;
    border-box: box-sizing !important;

    &:active, &:focus {
        outline: 0 !important;
        border: none !important;
        -moz-outline-style: none !important;
    }
`

const MenuItem = styled.li`
    background-color: ${props => (props.theme && props.theme.secondaryColor)} !important;
    height: 3.25vh;
    border: 0px;

    &.hovered a.menu-title {
        color: #E6A000 !important;
        text-decoration: none !important;
        border-box: box-sizing !important;
    }

    &.hovered svg {
        fill: #E6A000 !important;
    }

`

const MenuSubItems = styled.div`
    box-shadow: 0px 3px 6px #00000029;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    border-top: 1px solid #E6A000 !important;
    margin-top: .125rem !important;
`

const MenuSubItemsLink = styled(Link)`
    height: 6vh !important
    padding: 0px !important;
    padding: 3% 0 0 0 !important;
    font-size: 0.75rem;
    padding-top 0.75rem !important;
    padding-bottom 0.75rem !important;
    &:hover {
        background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
    }

    &:active span {
        color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
    }
`

const Dropdown = memo(props => {

    const [state, setState] = useState()

    const handleMouseOver = useCallback(() => {
        setState({
            open: true
        });
    }, []);


    const handleClickOutside = useCallback(() => {
        setState({
            open: false
        });
    }, []);


    const {  title, views, route } = props;

    const { open } = state || {};

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseLeave={handleClickOutside}
        >
            <MenuItem
                className={`d-flex align-items-center justify-content-center nav-item dropdown mr-5 ${open && 'hovered'}`}
            >
                <MenuTitle
                    className={`menu-title nav-link d-in`}
                    to={route}
                >
                    <span className="d-inline-block">{title}</span>
                </MenuTitle>
                {
                    views.length > 0 && <MenuSubItems className={open ? "dropdown-menu show" : "dropdown-menu"} x-placement="bottom-start">
                        {
                            views.map((view, idx) => {
                                return <MenuSubItemsLink to={view.route} className="dropdown-item" href="#" key={idx}>
                                    <span className="ml-3">{view.title}</span>
                                </MenuSubItemsLink>
                            })
                        }
                    </MenuSubItems>
                }
            </MenuItem>
        </div>
    )

})

export default withRouter(Dropdown)