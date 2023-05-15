import customFetch, { checkForUnAuthorizedResponse } from "../../utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/AllJobsSlice";
import { logOutUser } from "../user/UserSlice";
import { clearValues } from "./JobSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (e) {
    return checkForUnAuthorizedResponse(e, thunkAPI);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (e) {
    return checkForUnAuthorizedResponse(e, thunkAPI);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (e) {
    return checkForUnAuthorizedResponse(e, thunkAPI);
  }
};
