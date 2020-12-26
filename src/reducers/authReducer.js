import { toast } from "react-toastify";

export const authReducer = ( state = {}, action ) => {
    switch(action.type){
        case "SIGN_IN":
            toast.dark("SIGNED IN. WELCOME");
            return state;
        case "SIGN_IN_ERROR":
            toast.error("SIGNED IN ERROR");
            return state;
        case "SIGN_OUT":
            toast("You have signed out");
            return state;
        case "SIGN_UP":
            toast.dark("WELCOME");
            return state;
        case "SIGN_UP_ERROR":
            toast.error("SIGNED UP ERROR");
            return state;
        default:
            return state;
    }
};