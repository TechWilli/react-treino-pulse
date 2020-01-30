import React, { memo } from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import Icon from "../../icons/Icon/Icon";

const TooltipContent = styled.div`
    height: 100%;
`

const NotificationsTitle = styled.label`
    color: ${props => (props.theme && props.theme.textTertiaryColor)} !important;
`

const NotificationContent = styled.div`
    background-color: ${props => (props.theme && props.theme.primaryColor)} !important;
`

const NotificationText = styled.p`
    color: ${props => (props.theme && props.theme.textSecondaryColor)} !important;
`

const NotificationTitle = styled.p`
    color: ${props => (props.theme && props.theme.textPrimaryColor)} !important;
`

const NotificationMessagesList = styled.div`
    height: max-content;
    overflow-y: auto;
    height: 87% !important;
`

const Notifications = memo(({ theme }) => {

    return (
        <>
            <Icon
                data-tip
                data-event='click'
                data-for="core-notification-tooltip"
                name="notification-bell-outline-interface-symbol-1"
                size="23"
                color={theme && theme.secondaryColor}
                notificationValue="12"
                clickable
            />
            <TooltipContent>
                <div className="row w-100 m-0">
                    <div className="col-1 p-0 h-100">
                        <Icon
                            name="email-closed-outlined-back-envelope-interface-symbol"
                            color={theme && theme.textTertiaryColor}
                            size="15"
                            className="align-middle"
                        />
                    </div>
                    <div className="col-11 pr-0 pl-1 h-100">
                        <NotificationsTitle
                            theme={theme}
                            className="align-middle mb-0"
                        >
                            central de comunicação
                                                </NotificationsTitle>
                    </div>
                </div>
                <hr className="mb-1 mt-2" />
                <NotificationMessagesList>
                    <NotificationContent
                        theme={theme}
                        className="row w-100 m-0"
                    >
                        <div className="col-12">
                            <NotificationText
                                theme={theme}
                                className="text-detail mb-0"
                            >
                                10/11/2019
                                                </NotificationText>
                        </div>
                        <div className="col-12">
                            <NotificationTitle
                                theme={theme}
                                className="mb-0"
                            >
                                assunto da mensagem
                                                </NotificationTitle>
                        </div>
                        <div className="col-12">
                            <NotificationText
                                theme={theme}
                                className="text-detail mb-0"
                            >
                                resumo da mensagem de alerta do sistema para o operador...
                                                </NotificationText>
                        </div>
                    </NotificationContent>
                    <hr className="mb-1 mt-1" />
                    <NotificationContent
                        theme={theme}
                        className="row w-100 m-0"
                    >
                        <div className="col-12">
                            <NotificationText
                                theme={theme}
                                className="text-detail mb-0"
                            >
                                10/11/2019
                                                </NotificationText>
                        </div>
                        <div className="col-12">
                            <NotificationTitle
                                theme={theme}
                                className="mb-0"
                            >
                                assunto da mensagem
                                                </NotificationTitle>
                        </div>
                        <div className="col-12">
                            <NotificationText
                                theme={theme}
                                className="text-detail mb-0"
                            >
                                resumo da mensagem de alerta do sistema para o operador...
                                                </NotificationText>
                        </div>
                    </NotificationContent>
                    <hr className="mb-1 mt-1" />
                    <NotificationContent
                        theme={theme}
                        className="row w-100 m-0"
                    >
                        <div className="col-12">
                            <NotificationText
                                theme={theme}
                                className="text-detail mb-0"
                            >
                                10/11/2019
                                                </NotificationText>
                        </div>
                        <div className="col-12">
                            <NotificationTitle
                                theme={theme}
                                className="mb-0"
                            >
                                assunto da mensagem
                                                </NotificationTitle>
                        </div>
                        <div className="col-12">
                            <NotificationText
                                theme={theme}
                                className="text-detail mb-0"
                            >
                                resumo da mensagem de alerta do sistema para o operador...
                                                </NotificationText>
                        </div>
                    </NotificationContent>
                    <hr className="mb-1 mt-1" />
                    <NotificationContent
                        theme={theme}
                        className="row w-100 m-0"
                    >
                        <div className="col-12">
                            <NotificationText
                                theme={theme}
                                className="text-detail mb-0"
                            >
                                10/11/2019
                                                </NotificationText>
                        </div>
                        <div className="col-12">
                            <NotificationTitle
                                theme={theme}
                                className="mb-0"
                            >
                                assunto da mensagem
                                                </NotificationTitle>
                        </div>
                        <div className="col-12">
                            <NotificationText
                                theme={theme}
                                className="text-detail mb-0"
                            >
                                resumo da mensagem de alerta do sistema para o operador...
                            </NotificationText>
                        </div>
                    </NotificationContent>
                    <hr className="mb-1 mt-1" />

                </NotificationMessagesList>
            </TooltipContent>
        </>
    );
})

const mapStateToProps = (state, ownProps) => {
    return {
        theme: state.ThemeReducer.theme
    };
}

export default connect(mapStateToProps, null)(Notifications)