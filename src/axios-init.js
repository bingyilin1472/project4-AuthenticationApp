import axios from 'axios'

const signAxiosInstance = axios.create()
signAxiosInstance.defaults.baseURL = 'https://identitytoolkit.googleapis.com/v1'
const updateAxiosInstance = axios.create()
updateAxiosInstance.defaults.baseURL = 'https://authenticationapp-78bd6.firebaseio.com'

export default { sign_axios: signAxiosInstance, update_axios: updateAxiosInstance }
