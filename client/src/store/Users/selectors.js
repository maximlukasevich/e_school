export const getUserById = (state, userId) => {
    return state.users.users.find(item => item._id === userId)
}