import axios from '@/axios-init'
import router from '@/router'
export default {
  timerLogOut: ({ dispatch }, expirationTime) => {
    setTimeout(() => {
      dispatch('logout')
    }, expirationTime * 1000)
  },
  signup: ({ commit, dispatch }, authData) => {
    axios.sign_axios.post('/accounts:signUp?key=AIzaSyACgGR55I-n8c2CRpne9QTnWdw8jPgd63s', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res)
        commit('authUser', {
          idToken: res.data.idToken,
          userId: res.data.localId
        })
        // 要在註冊後，才能做寫入，因為token是註冊後獲得
        dispatch('storeUser', authData)
        dispatch('timerLogOut', res.data.expiresIn)
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        router.replace({ name: 'Dashboard' })
      })
      .catch(error => console.log(error))
  },
  // 測試帳戶1: abcd1234@gmail.com、4321abcd
  // 測試帳戶2: abcd6789@gmail.com、9876abcd
  signin: ({ commit, dispatch }, authData) => {
    axios.sign_axios.post('/accounts:signInWithPassword?key=AIzaSyACgGR55I-n8c2CRpne9QTnWdw8jPgd63s', {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then(res => {
        console.log(res)
        commit('authUser', {
          idToken: res.data.idToken,
          userId: res.data.localId
        })
        dispatch('timerLogOut', res.data.expiresIn)
        const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('userId', res.data.localId)
        localStorage.setItem('expirationDate', expirationDate)
        router.replace({ name: 'Dashboard' })
      })
      .catch(error => console.log(error))
  },
  AutoLoginWithLocal: ({ commit, dispatch }) => {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    // 之前已經*1000，是Date Instance不用作轉換
    const expirationDate = localStorage.getItem('expirationDate')
    const now = new Date()
    if (now >= expirationDate) {
      return
    }
    commit('authUser', {
      idToken: localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    })
  },
  logout: ({ commit }) => {
    commit('clearAuth')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
  },
  storeUser: ({ commit, state }, userData) => {
    axios.update_axios.post('/users.json' + '?auth=' + state.idToken, userData)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  },
  fetchUser: ({ commit, state }) => {
    axios.update_axios.get('/users.json' + '?auth=' + state.idToken)
      .then(res => {
        console.log(res)
        const data = res.data
        const users = []
        for (const key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        console.log(users[0].email)
        commit('saveUser', users)
      })
      .catch(error => console.log(error))
  }
}
