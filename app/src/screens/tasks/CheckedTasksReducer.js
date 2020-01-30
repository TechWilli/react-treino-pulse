import { initialState } from './TasksReducer'

const reducer = (state = initialState, action) => {

    if (action.type === 'FILTER_CHECKED_TASKS') {
        let { taskList } = state;

        const newTaskList = taskList.filter(task => {
            return task.done !== false
        });

        return {
            ...state,
            taskList: newTaskList
        }

    }

    return { ...state }

}

export default reducer;