import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from '../assets/history';
import ThemeReducer from '../assets/themes/ThemeReducer';
import TasksReducer from '../screens/tasks/TasksReducer';
import CheckedTasksReducer from '../screens/tasks/CheckedTasksReducer'

let RootReducer = combineReducers({
	router: connectRouter(history),
	ThemeReducer,
	TasksReducer,
	CheckedTasksReducer
});

export default RootReducer;