// // firebaseConfig.js
// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import {
// 	initializeAuth,
// 	getAuth,
// 	getReactNativePersistence,
// } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyBbTtBV9dRhSG5kelbQ_mbbeWhRKWVvFXQ",
// 	authDomain: "lastmela-ef1b1.firebaseapp.com",
// 	projectId: "lastmela-ef1b1",
// 	storageBucket: "lastmela-ef1b1.appspot.com",
// 	messagingSenderId: "949267775833",
// 	appId: "1:949267775833:web:0fba94504f6e676300cc48",
// };

// // Initialize Firebase only if it's not already initialized
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// // Initialize Firestore
// const db = getFirestore(app);

// // Initialize Firebase Auth with AsyncStorage for persistence
// const auth = getAuth(app);
// if (!auth.settings.isAppCheckTokenEnabled) {
// 	initializeAuth(app, {
// 		persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// 	});
// }

// // Initialize Firebase Storage
// const storage = getStorage(app);

// export { db, auth, storage };


// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import {
// 	initializeAuth,
// 	getAuth,
// 	getReactNativePersistence,
// } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyBbTtBV9dRhSG5kelbQ_mbbeWhRKWVvFXQ",
// 	authDomain: "lastmela-ef1b1.firebaseapp.com",
// 	projectId: "lastmela-ef1b1",
// 	storageBucket: "lastmela-ef1b1.appspot.com",
// 	messagingSenderId: "949267775833",
// 	appId: "1:949267775833:web:0fba94504f6e676300cc48",
// };

// // Initialize Firebase only if it's not already initialized
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// // Initialize Firestore
// const db = getFirestore(app);

// // Initialize Firebase Auth with AsyncStorage for persistence
// let auth;
// if (!getAuth(app)._isInitialized) {
// 	auth = initializeAuth(app, {
// 		persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// 	});
// } else {
// 	auth = getAuth(app);
// }

// // Initialize Firebase Storage
// const storage = getStorage(app); // <-- Initialize Firebase Storage

// export { db, auth, storage };
// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { setLogLevel } from "firebase/firestore";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: "AIzaSyCMT7GfPLfZDnmfylut3q0tWFexmSDmdWQ",
// 	authDomain: "mela-ride.firebaseapp.com",
// 	databaseURL: "https://mela-ride-default-rtdb.firebaseio.com",
// 	projectId: "mela-ride",
// 	storageBucket: "mela-ride.appspot.com",
// 	messagingSenderId: "348533685823",
// 	appId: "1:348533685823:web:d8736430cce1953c40428a",
// };
// setLogLevel("debug");
// // Initialize Firebase
// const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// // Initialize Firestore
// const db = getFirestore(app);

// // Initialize Firebase Auth with AsyncStorage for persistence
// const auth = initializeAuth(app, {
// 	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

// // Initialize Firebase Storage
// const storage = getStorage(app); // <-- Initialize Firebase Storage

// export { db, auth, storage };
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getStorage } from "firebase/storage";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDM4tPuWfFYX8zwHX3cAG81UBnZjQGjq58",
	authDomain: "kiraleader-748c2.firebaseapp.com",
	projectId: "kiraleader-748c2",
	storageBucket: "kiraleader-748c2.appspot.com",
	messagingSenderId: "1088839833163",
	appId: "1:1088839833163:web:4f9d45e8b23a43bbfe5fce",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firebase Storage
const storage = getStorage(app); // <-- Initialize Firebase Storage

export { db, auth, storage };