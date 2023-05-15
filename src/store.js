import { configureStore } from "@reduxjs/toolkit";
import allJobsSlice from "./features/allJobs/AllJobsSlice";
import JobSlice from "./features/job/JobSlice";
import UserSlice from "./features/user/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    job: JobSlice,
    allJobs: allJobsSlice,
  },
});
