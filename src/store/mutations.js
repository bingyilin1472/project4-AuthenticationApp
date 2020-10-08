export default {
  authUser: (state, userData) => {
    state.idToken = userData.idToken
    state.userId = userData.userId
  },
  saveUser: (state, user) => {
    state.user = user
  },
  clearAuth: (state) => {
    state.idToken = null
    state.userId = null
    state.user = null
  }
}
