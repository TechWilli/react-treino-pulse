import React, { memo } from "react";
import Icon from "../../icons/Icon/Icon";
import { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux';

const UserInfoGlobalStyle = createGlobalStyle`
    .navbar-user-info {
        height: 5vh;
        width: 9.5vw;
    }


    .navbar-user-info .navbar-user-name,    
    .navbar-user-info .navbar-user-jobtitle {
        color: ${props => props.theme && props.theme.secondaryColor};
    }

    .navbar-user-info .navbar-user-name {
        font-size: 12px;
        margin: 0px;
        padding: 0px;
    }

    .navbar-user-info .navbar-user-jobtitle {
        font-size: 10px;
        margin: 0px;
        padding: 0px;
    }

    .navbar-user-icon-wrapper {
        border: 1px solid ${props => props.theme && props.theme.secondaryColor};
        height: 33px;
        width: 33px;
        border-radius: 50%;
        cursor: pointer;
    }
`

const UserInfo = memo(({ theme }) => {

    return (
        <>
            <UserInfoGlobalStyle theme={theme} />
            <div className="row navbar-user-info float-right ">
                <div className="col-9 pl-0 pr-1 text-right h-100 m-0">
                    <div className="row h-100">
                        <div className="col-12 pl-0 h-50">
                            <span className="navbar-user-name align-top">Renato Yamashita</span>
                        </div>
                        <div className="col-12 pl-0 h-50">
                            <span className="navbar-user-jobtitle align-top">adminuser</span>
                        </div>
                    </div>
                </div>
                <div className="col-3 p-0">
                    <div className="navbar-user-icon-wrapper p-1">
                        <Icon
                            className="float-right"
                            name="user-outline-male-symbol-of-interface"
                            size="22"
                            color={theme && theme.secondaryColor} />
                    </div>
                </div>
            </div>
        </>
    );
})

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.ThemeReducer.theme
    };
}

export default connect(mapStateToProps, null)(UserInfo);