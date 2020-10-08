import firebase from 'firebase'
var config = JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG)
var firebaseConfig = config
firebase.initializeApp(firebaseConfig)
