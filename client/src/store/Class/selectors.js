export const getClassByClassName = (state, className) => {
    return state.classes.classes.find(item => item.name === className)
}