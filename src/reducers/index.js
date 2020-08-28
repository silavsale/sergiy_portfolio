export default (theme = false, action) => {
    switch (action.type) {
        case "DARK":
            return theme = false;
        case "LIGHT":
            return theme = true;
        default:
            return theme;
    }
};