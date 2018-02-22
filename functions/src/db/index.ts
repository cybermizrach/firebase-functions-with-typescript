import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const defaultApp = admin.initializeApp(functions.config().firebase)

const firestore = admin.firestore();
export default firestore;

const firebase = admin.database();
export { firebase }
