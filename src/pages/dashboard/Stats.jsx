import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartsContainer, StatsContainer } from "../../components";
import { showStats } from "../../features/allJobs/AllJobsSlice";

const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector(
    (state) => state.allJobs
  );
  useEffect(() => {
    dispatch(showStats());
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
