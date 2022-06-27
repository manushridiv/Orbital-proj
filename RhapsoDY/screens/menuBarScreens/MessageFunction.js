import { db } from "../../firebase";
import { ref, set, child, push } from "firebase/database";

export const SendMessage = async (currentUuid, guestUuid, message) => {
    try {
        return push(ref(db, 'messages/' + currentUuid + guestUuid), {
            message: {
                sender: currentUuid,
                receiver: guestUuid,
                message: message
            }
        });
    } catch (error) {
        return error;   
    }
}

export const ReceiveMessage = async (currentUuid, guestUuid, message) => {
    try {
        return push(ref(db, 'messages/' + guestUuid + currentUuid), {
            message: {
                sender: currentUuid,
                receiver: guestUuid,
                message: message
            }
        });
    } catch (error) {
        return error;   
    }
}