import customFetch, { checkForUnAuthorizedResponse } from "../../utils/axios";
import { clearAllJobsState, clearFilters } from "../allJobs/AllJobsSlice";
import { clearValues } from "../job/JobSlice";
import { logOutUser } from "./UserSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data.msg);
  }
};
export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data.msg);
  }
};
export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (e) {
    return checkForUnAuthorizedResponse(e, thunkAPI);
  }
};
export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logOutUser(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearFilters());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (e) {
    return Promise.reject();
  }
};
