import React from "react";
import { useDispatch } from "react-redux";
import { JobsContainer, SearchContainer } from "../../components";

const AllJobs = () => {
  const dispatch = useDispatch();
  return (
    <>
    <getAllJobs/>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};

export default AllJobs;
