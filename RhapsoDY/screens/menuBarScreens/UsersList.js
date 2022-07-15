import { db } from "../../firebase";
import { auth } from "../../firebase";
import { ref, onValue, get } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

export default function UsersList() {
    const dbUserRef = ref(db, 'users/');
    const users = [];
    onValue(dbUserRef, (snapshot) => {
        snapshot.forEach((child) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    if (child.val().uuid == uid) {

                    } else {
                        users.push({
                            displayName: child.val().displayName, //using displayname now as it is up
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