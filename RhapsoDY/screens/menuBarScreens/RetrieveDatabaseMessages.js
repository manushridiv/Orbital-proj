import { db } from "../../firebase";
import { ref, push, onValue } from "firebase/database";
import { auth } from "../../firebase";

export const RetrieveDatabaseMessage = async () => {
    const dbMessageRef = ref(db, 'messages/{userUid}/message');
    const allMessages = [];
    try {
        onValue(dbMessageRef, (snapshot) => {
            const uuid = auth.currentUser.uid;
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