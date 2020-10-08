export default {
  user: (state) => {
    return state.user
  },
  isAuthenticated (state) {
    return state.idToken !== null
  }
}
