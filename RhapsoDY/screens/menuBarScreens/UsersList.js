import { db } from "../../firebase";
import { auth } from "../../firebase";
import { ref, onValue, get } from "firebase/database";

export default function UsersList() {
    const dbUserRef = ref(db, 'users/');
    const users = [];
    onValue(dbUserRef, (snapshot) => {
        const uuid = auth.currentUser.uid;
        snapshot.forEach((child) => {
            if (child.val().uuid == uuid) {

            } else {
                users.push({
                    userName: child.val().email, //using email as name is not done up yet
                    uuid: child.val().uuid
                })
            }
        });
        console.log("List of Users", users);

    });
    return users;
}