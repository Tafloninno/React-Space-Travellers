import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllMissions from "./Missions";
import { getMissions } from "../../redux/missions/missionSlice";

const MissionList = () => {
  const dispatch = useDispatch();
  const { missionList, isLoading } = useSelector((store) => store.mission);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading missions...Please Wait!</div>;
  }

  return (
    <>
      {missionList.map((mission) => (
        <AllMissions
          key={mission.mission_id}
          name={mission.mission_name}
          desc={mission.description}
          id={mission.mission_id}
        />
      ))}
    </>
  );
};

export default MissionList;
