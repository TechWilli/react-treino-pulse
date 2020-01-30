const _modalSettingsAction = modalSettings => {
    return {
        type : 'SET_GLOBAL_MODAL_SETTINGS',
        payload: modalSettings
    }
}

const _showGlobalModalAction = id => {
    return {
        type : 'SHOW_GLOBAL_MODAL',
        payload: id
    }
}


const _closeGlobalModalAction = id => {
    return {
        type : 'CLOSE_GLOBAL_MODAL',
        payload: id
    }
}

const _minimizeModalAction = identifier => {
    return {
        type : 'MINIMIZE_GLOBAL_MODAL',
        payload: identifier
    }
}

const setGlobalModalSettings = modalSettings => {
    return dispatch => {
        console.log("setGlobalModalSettings: ", modalSettings)
        dispatch(_modalSettingsAction(modalSettings))
    }
}

const showGlobalModal = id => {
    return dispatch => {
        console.log("_showGlobalModalAction: ", id)
        dispatch(_showGlobalModalAction(id))
    }
}

const minimize = identifier =>{
    return dispatch => {
        dispatch(_minimizeModalAction(identifier))
    }
}

const closeGlobalModal = identifier =>{
    return dispatch => {
        dispatch(_closeGlobalModalAction(identifier))
    }
}



export default {
    setGlobalModalSettings,
    showGlobalModal,
    minimize,
    closeGlobalModal
}