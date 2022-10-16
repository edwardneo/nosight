import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import * as admin from "firebase-admin";

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
    STORAGE_BUCKET
} = process.env;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
    storageBucket: STORAGE_BUCKET
};

const app = initializeApp(firebaseConfig);

//const db = admin.firestore();
const storage = getStorage(app);

export { storage, admin };