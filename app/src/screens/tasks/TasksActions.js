import uuid from 'uuid'

export const addTaskToList = (taskName) => {
    return dispatch => {
        const task =  {
            id: uuid(),
            name: taskName,
            done: false
        }

        const action = {
            type: 'ADD_TASK_TO_LIST',
            payload: task
        }

        dispatch(action);
    }
}

export const toggleTask = (id) => {
    return dispatch => {

        const action = {
            type: 'TOOGLE_TASK',
            payload: id
        }

        dispatch(action);
    }
}

export const deleteTask = (id) => {
    return dispatch => {

        const action = {
            type: 'DELETE_TASK',
            payload: id
        }

        dispatch(action);
    }
}

export const filterCheckedTasks = (done) => {
    return dispatch => {

        const action = {
            type: 'FILTER_CHECKED_TASKS',
            payload: done
        }

        dispatch(action);
    }
}