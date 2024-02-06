import { orgRegisterStart, orgRegisterSuccess, orgRegisterFailed } from "./auth.types";

const initialState = {
    user: [],
    loading: false,
    error: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ORGREGISTERSTART":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "ORGREGISTERSUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            };
        case "ORGREGISTERFAILED":
            return {
                ...state,
                user: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
