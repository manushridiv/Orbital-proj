import { db } from "../../firebase";
import { ref, push, onValue } from "firebase/database";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const RetrieveDatabaseMessage = (uid, guestUuid) => {
    const dbMessageRef = ref(db, `messages`);
    const allMessages = [];

    onValue(dbMessageRef, (snapshot) => {
        snapshot.child(uid).child(guestUuid).forEach((snapshot2) => {
            allMessages.push({
                sendBy: snapshot2.child("sender").val(),
                receiveBy: snapshot2.child('receiver').val(),
                message: snapshot2.child('message').val()
            })
        })
    })
    return allMessages;
}