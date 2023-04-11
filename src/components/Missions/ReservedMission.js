import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ReservedMission = () => {
  const reservedMissions = useSelector(
    (state) => state.mission.reservedMissions,
  );

  return (
    <div>
      <h3>My Missions</h3>
      <ul>
        {reservedMissions.length === 0 ? (
          <p>
            You have not reserved any missions yet!
            <Link to="/missions">Check all missions</Link>
          </p>
        ) : (
          reservedMissions.map((mission) => (
            <li key={mission.id}>{mission.name}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReservedMission;
