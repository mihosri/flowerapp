import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAV54Zl2SaPwazi-dTitVjbGrdqPbD5ViI',
  authDomain: 'petals-and-prose.firebaseapp.com',
  projectId: 'petals-and-prose',
  storageBucket: 'petals-and-prose.appspot.com',
  messagingSenderId: '175963494891',
  appId: '1:175963494891:web:9bfa56f2f9375094c5a1ae',
  measurementId: 'G-ZLZKGG617N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Flower = collection(db,'Flowers')
module.exports = Flower
