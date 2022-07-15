import { db } from "../../firebase";
import { ref, push, onValue } from "firebase/database";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { stringify } from "@firebase/util";

export const RetrieveDatabaseMessage = async (combinedUuid) => {
    const dbMessageRef = ref(db, `messages`);
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
    onValue(dbMessageRef, (snapshot1) => {
        snapshot1.forEach((data) => {
            //console.log(data.key);
            data.forEach((data2) => {
                console.log(data2.val());
                /* data2.forEach((data3) => {
                    //console.log(data3.key);
                    allMessages.push({
                        key: data3.val()
                    })
                }) */
            })
        })        
    });
    //console.log(allMessages)
    return allMessages;
}