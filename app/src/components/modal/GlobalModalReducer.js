const floatingReducerState = {
    modals: [],
    displayedModal: null,
}

const GlobalModalReducer = (state = floatingReducerState, action) => {
    switch (action.type) {
        case 'SHOW_GLOBAL_MODAL':

            const displayedModal = state.modals.find(({ identifier }) => identifier === action.payload)

            return {
                ...state,
                displayedModal
            }

        case 'REMOVE_MODAL_FOCUS':
            return {
                ...state,
                displayedModal: null
            }

        case 'SET_GLOBAL_MODAL_SETTINGS':

            const stateModals = [
                ...state.modals,
                action.payload
            ];

            return {
                ...state,
                modals: stateModals
            }

        case 'CLOSE_GLOBAL_MODAL':

            let modalFound = state.modals.find(({ identifier }) => identifier === action.payload)

            const modalIndex = modalFound && state.modals.findIndex(({ identifier }) => identifier === action.payload)

            const newStateModals = state.modals.splice(modalIndex + 1, 1)

            modalFound.fullsize = false;
            
            const modalsList = [
                ...newStateModals
            ]

            return {
                ...state,
                modals: modalsList,
                displayedModal: null
            }

        case 'GET_GLOBAL_MODAL_STATE':
            return { ...state }
        default:
            return { ...state };
    }
}

export default GlobalModalReducer;