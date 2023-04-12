import React from "react";
import { useSelector } from "react-redux";

const ReservedMission = () => {
  const reservedMissions = useSelector(
    (state) => state.mission.reservedMissions
  );

  return (
    <div>
      <h3>My Missions</h3>
      {reservedMissions.length > 0 && (
        <ul>
          {reservedMissions.map((mission) => (
            <li key={mission.id}>{mission.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservedMission;
