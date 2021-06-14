const toggleThemeReducer = (state = { darkThemeEnabled: false }, action) => {
    switch (action.type) {
        case 'toggle':
            console.log(state.darkThemeEnabled)
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
        default:
            return state
    }
}

export default toggleThemeReducer;
