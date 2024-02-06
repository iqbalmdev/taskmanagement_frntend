import { registerUser } from "../../api/org";

export const fetchUserData = (orgData) => {
    return async (dispatch) => {
      try {
        const data = await registerUser(orgData); // Call your API function here
        dispatch({ type: 'ORGREGISTERSUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'ORGREGISTERFAILED', payload: error.message });
      }
    };
  };