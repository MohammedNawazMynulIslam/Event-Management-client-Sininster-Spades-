
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4W3Ny3-UdiMECCXm08nIfsQfYnCUSkTU",
  authDomain: "sinisterspades-auth.firebaseapp.com",
  projectId: "sinisterspades-auth",
  storageBucket: "sinisterspades-auth.appspot.com",
  messagingSenderId: "356050768866",
  appId: "1:356050768866:web:089f3dc1c10cb263e05fbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;