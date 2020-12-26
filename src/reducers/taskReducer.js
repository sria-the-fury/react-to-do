import { toast } from "react-toastify";

export const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_TASK":
            toast.success("Task Added");
            return state;
        case "ADD_TASK_ERROR":
            toast.error("Error");
            return state;
        case "REMOVE_TASK":
            toast.warn("Task has been removed");
            return state;
        case "REMOVE_TASK_ERROR":
            toast.error("TASK REMOVE ERROR");
            return state;
        case "TASK_CHECKED":
            toast.info("TASK HAS BEEN CHECKED");
            return state;
        case "TASK_CHECKED_ERROR":
            toast.error("TASK CHECKED ERROR");
            return state;
        default:
            return state;

    }
};
