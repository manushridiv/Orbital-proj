import { db } from "../../firebase";
import { ref, child, push } from "firebase/database";

export const SendMessage = async (currentUuid, guestUuid, message) => {
    try {
        return push(child(ref(db, 'messages/' + currentUuid), (guestUuid)), {
                message: message,
                sender: currentUuid,
                receiver: guestUuid,
        });
    } catch (error) {
        return error;   
    }
}

export const ReceiveMessage = async (currentUuid, guestUuid, message) => {
    try {
        return push(child(ref(db, 'messages/' + guestUuid), (currentUuid)), {
                message: message,
                sender: currentUuid,
                receiver: guestUuid
        });
    } catch (error) {
        return error;   
    }
}