import { loadState } from "../LocalStorage";

const initialState = loadState();


const toggleThemeReducer = (state = { darkThemeEnabled: initialState }, action) => {
    switch (action.type) {
        case 'toggle':
            console.log(state.darkThemeEnabled)
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
        default:
            return state
    }
}

export default toggleThemeReducer;
