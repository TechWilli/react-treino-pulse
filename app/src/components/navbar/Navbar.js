import React, { Component } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom';

import Logo from '../../assets/images/logotipo-pulse.png'

const NavStyle = createGlobalStyle`
   nav.navbar {
       height: 6vh !important;
   }

   .navbar .navbar-brand img {
       width: 7.5vw;
       height: 5.75vh;
   }

   .navbar-icon-list {
       height: 5vh;
       width: 6.125vw;
   }

   .navbar-actions-wrapper {
       width: 19.5vw;
       height: 5.1vh;
   }

`

const Nav = styled.nav`
    background-color: #F7F6F0 !important;
`

class Navbar extends Component {

    state = {
        redirectToUrl: '',
    };

    logout = () => {

        Swal.fire({
            title: 'Logout',
            text: "Deseja encerrar sessão?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f09a39',
            cancelButtonColor: '#e2e2e2',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                this.props.logoutUserFromApplication();
            }

        })

    }

    navigateTo = toUrl => this.setState({
        redirectToUrl: toUrl
    }, () => this.setState({ redirectToUrl: '' }))

    goToPage = ({ title, route }) => {
        this.props.reduxAddPage({ title: title, route: route });
        this.props.reduxSetTabNavigation({ title: title, route })
        this.navigateTo(route)
    }

    render() {

        const { theme } = this.props;

        if (!!this.state.redirectToUrl) {
            return (<Redirect to={this.state.redirectToUrl} />);
        }

        return (
            <>
                <NavStyle theme={this.props.theme} />
                <Nav className="navbar navbar-expand-lg" theme={theme}>
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} className="d-inline-block align-top" alt="" />
                        </Link>
                        <section className="navbar-actions-wrapper">
                            <div className="row navbar-icon-list float-left">
                                <div className="col-6 d-flex align-items-center justify-content-center">
                                    {/* <Notifications /> */}
                                </div>
                            </div>
                        </section>
                    </div>
                </Nav>
            </>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.ThemeReducer.theme
    };
}

export default connect(mapStateToProps, null)(Navbar);