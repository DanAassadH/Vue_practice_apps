import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line no-unused-vars
import firebase from "firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/main.css";

Vue.config.productionTip = false;

// const firebaseConfig = {
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appId: "app-id",
//   measurementId: "G-measurement-id"
// };

// firebase.initializeApp(firebaseConfig);

//For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
const firebaseConfig = {
  apiKey: "AIzaSyAZEX1KbMp3ro68hPGKrTJAwRVkCDCQPac",
  authDomain: "fir-authentication-4f327.firebaseapp.com",
  projectId: "fir-authentication-4f327",
  storageBucket: "fir-authentication-4f327.appspot.com",
  messagingSenderId: "82370717063",
  appId: "1:82370717063:web:d99fc33a18f2e87e2c1f22",
  measurementId: "G-BH2WNYQE4C"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
