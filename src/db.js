import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  // API KEYS
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: 'firevuechat-f26c1',
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDING_ID,
  appId: process.env.APP_ID
};

const db = firebase.initializeApp(config);
export default db;
