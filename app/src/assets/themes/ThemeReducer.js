const initialState = {
	themeName: 'light'
};

const ThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_THEME':
			return {
				...state,
				theme: action.theme
			};

		case 'CHANGE_THEME':
			return {
				...state,
				themeName: action.themeName,
				theme: action.theme
			};

		default:
			return state;
	}
};

export default ThemeReducer;