export const initialState = {
    taskList: [
        {
            id: 1,
            name: 'Baixar projeto React',
            done: true
        },
        {
            id: 2,
            name: 'Estudar React Hooks',
            done: true
        },
        {
            id: 3,
            name: 'Estudar Redux',
            done: false
        },
        {
            id: 4,
            name: 'Pesquisar Styled Components',
            done: false
        },
        {
            id: 5,
            name: 'Realizar desafio do treinamento',
            done: false
        }
    ]
}

const reducer = (state = initialState, action) => {

    if (action.type === 'ADD_TASK_TO_LIST') {
        let { taskList } = state;

        const newTaskList = [
            ...taskList,
            action.payload
        ]

        return {
            ...state,
            taskList: newTaskList
        }
    }

    if (action.type === 'TOGGLE_TASK') {
        let { taskList } = state;

        const newTaskList = taskList.map(task => {
            if (task.id === action.payload) {
                task.done = !taskList.done
            }

            return task
        });

        return {
            ...state,
            taskList: newTaskList
        }
    }

    if (action.type === 'DELETE_TASK') {
        let { taskList } = state;

        const newTaskList = taskList.filter(task => {
            return task.id !== action.payload
        });

        return {
            ...state,
            taskList: newTaskList
        }
    }

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
