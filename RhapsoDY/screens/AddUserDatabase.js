import { db } from "../firebase";
import { ref, set } from "firebase/database";

export function addUserData(userID, email, imageURL) {
    set(ref(db, 'users/' + userID), {
        email: email,
        image: imageURL,
        uuid: userID
    });
}