import { db } from "../../firebase";
import { ref, push, onValue } from "firebase/database";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const RetrieveDatabaseMessage = async () => {
    const dbMessageRef = ref(db, 'messages/{userUid}/message');
    const allMessages = [];
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
        } else {
            // User is signed out
            // ...
          }
        });
    try {
        onValue(dbMessageRef, (snapshot) => {
            snapshot.forEach((data) => {
                allMessages.push({
                    sendBy: data.val().sender,
                    receiveBy: data.val().receiver,
                    msg: data.val().message,
                })
                
            });
        });
    console.log(allMessages);
    return allMessages;
    } catch (error) {
        console.log('Error', error);
        return error;
    }
}