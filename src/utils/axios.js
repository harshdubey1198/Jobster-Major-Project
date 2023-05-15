import axios from "axios";
import { clearStore } from "../features/user/UserSlice";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export const checkForUnAuthorizedResponse = (e, thunkAPI) => {
  if (e.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("UnAuthorized ! Logging out");
  }
  return thunkAPI.rejectWithValue(e.response.message);
};
export default customFetch;
