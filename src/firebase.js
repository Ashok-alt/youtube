import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyB3iwb2_X0NeaO_EnqOVl52G5BR2CuiR-4",
   authDomain: "you-tube6.firebaseapp.com",
   projectId: "you-tube6",
   storageBucket: "you-tube6.appspot.com",
   messagingSenderId: "315183402953",
   appId: "1:315183402953:web:f07779e8981e5f3fd42218"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
