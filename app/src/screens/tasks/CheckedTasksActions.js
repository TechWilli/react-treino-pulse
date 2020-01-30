export const filterCheckedTasks = (done) => {
    return dispatch => {

        const action = {
            type: 'FILTER_CHECKED_TASKS',
            payload: done
        }

        dispatch(action);
    }
}