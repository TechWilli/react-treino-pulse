import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import styled from 'styled-components'
import './NavMenu.css';
import { connect } from 'react-redux';
import Dropdown from './Dropdown/Dropdown'

const Menu = styled.div`
    background-color: #333333 !important;
    height: 3.5vh;
`

const menuItens = [
    {
        menuTitle: "Hooks",
        route: '/',
        menuIcon: "fa fa-fw fa-chart-line",
        views: [
            {
                title: "useState",
                route: "/usestate"
            },
            {
                title: "useEffect",
                route: "/useeffect"
            },
            {
                title: "useCallback",
                route: "/usecallback"
            },
            {
                title: "memo",
                route: "/memo"
            }
        ]
    },
    {
        menuTitle: "TO-DOs",
        route: '/',
        menuIcon: "fa fa-fw fa-chart-line",
        views: [
            {
                title: "Todas as Tarefas",
                route: "/tasks"
            }, {
                title: "Tarefas Realizadas",
                route: "/checkedtasks"
            }
        ]
    },
]

class NavMenu extends Component {

    state = {
        isColapsed: true,
    }

    colapseNavbar = () => {
        this.setState({ isColapsed: !this.state.isColapsed });
    }

    openBreadcrumbItem = (view) => {
        const { location } = this.props;
        let urlArray = location.pathname.split("/");

        if (urlArray[urlArray.length - 1] === "new") {
            Swal.fire({
                title: "Se você trocar de página, as informações não serão salvas. Deseja continuar?",
                type: "warning",
                showCancelButton: true,
                customClass: {
                    confirmButton: "core-confirm-swal-button",
                },
                cancelButtonColor: "#F44949",
                confirmButtonText: "Sim",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.value) {
                    this.props.reduxAddPage({ title: view.title, route: view.route });
                    this.props.reduxSetTabNavigation({ title: view.title, route: view.route })
                }
            })
        } else {

            const { expanded } = this.btnToggle.props;

            if (expanded) {
                const btnToggle = document.querySelector('button[class^="sidenav---sidenav-toggle"]')
                setTimeout(
                    () => btnToggle.click(),
                    500
                )
            }

            this.props.reduxAddPage({ title: view.title, route: view.route });
            this.props.reduxSetTabNavigation({ title: view.title, route: view.route })

        }
    }

    getRouteObject = (arr, key) => {
        for (let section of arr) {
            for (let obj of section.views) {
                if (obj.route === key) {
                    return obj;
                }
            }
        }
    }

    componentDidMount() {
        // const { location } = this.props;
        // console.log("sidebar location", location)
        // let urlArray = location.pathname.split("/");
        // const route = this.getRouteObject(menuItens, `/${urlArray[1]}`)




        // this.props.reduxAddPage({ title: route.title, route: location.pathname });
        // this.props.reduxSetTabNavigation({ title: route.title, route: location.pathname })
    }

    render() {

        const { theme } = this.props;

        return (
            <div className="container-fluid">
                <Menu className="row menu-wrapper">
                    <div className="container">
                        <div className="menu-item-wrapper">
                            <ul className="nav nav-tabs">
                                {/* <DropdownGroup theme={theme} titleClass="pt-0 pb-0" title="vendas" items={menuItens} /> */}
                                {
                                    menuItens.map((item, idx) => {
                                        return <Dropdown
                                            theme={theme}
                                            key={idx}
                                            title={item.menuTitle}
                                            route={item.route}
                                            views={item.views}
                                        />
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Menu>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.ThemeReducer.theme
    };
}

export default connect(mapStateToProps, null)(withRouter(NavMenu));