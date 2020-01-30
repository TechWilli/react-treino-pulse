import DarkTheme from './dark.json'
import LightTheme from './light.json'

const getThemeAction = () => {
    let theme;
    switch (localStorage.getItem('theme')) {
        case 'light':
            theme = LightTheme;
            break;

        case 'dark':
        default:
            theme = DarkTheme;
            break;
    }

    return { type: 'GET_THEME', theme };
}

const changeThemeAction = themeToSet => {
    let theme;
    // switch (localStorage.getItem('theme')) {
    //     case 'light':
    //         localStorage.setItem('theme', 'dark');
    //         theme = DarkTheme;
    //         break;

    //     case 'dark':
    //     default:
    //         localStorage.setItem('theme', 'light');
    //         theme = LightTheme;
    //         break;
    // }

    switch (themeToSet) {
        case 'light':
            localStorage.setItem('theme', 'light');
            theme = LightTheme;
            break;

        case 'dark':
        default:
            localStorage.setItem('theme', 'dark');
            theme = DarkTheme;
            break;
    }

    return { type: 'CHANGE_THEME', themeName: localStorage.getItem('theme'), theme };
}


export const getTheme = () => {
    return (dispatch, getState) => {
        dispatch(getThemeAction());
    }
}

export const changeTheme = theme => {
    return (dispatch, getState) => {
        dispatch(changeThemeAction(theme));
    }
}

export default {
    getTheme,
    changeTheme
}