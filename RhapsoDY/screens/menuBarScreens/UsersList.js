import { db } from "../../firebase";
//import { auth } from "../../firebase";
import { ref, onValue, get } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

export default function UsersList() {
    const dbUserRef = ref(db, 'users/');
    const users = [];
    onValue(dbUserRef, (snapshot) => {
<<<<<<< HEAD
=======
        //const uuid = auth.currentUser.uid;
>>>>>>> 6091c353c64c11098c16fcc7ba9be377cda75646
        snapshot.forEach((child) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  // User is signed in, see docs for a list of available properties
                  // https://firebase.google.com/docs/reference/js/firebase.User
                  const uid = user.uid;
                  if (child.val().uuid == uid) {
                    //
                  } else {
                    users.push({
                        userName: child.val().email, //using email as name is not done up yet
                        uuid: child.val().uuid
                    })
                }
                
                } else {
                    // User is signed out
                    // ...
                  }
                });
        });
        console.log("List of Users", users);

    });
    return users;
}