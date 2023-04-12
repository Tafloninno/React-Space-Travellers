import React from 'react';
import { useSelector } from 'react-redux';
import ReservedMission from '../components/Missions/ReservedMission';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRocket = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="myprofile">
      <div className="mymissions">
        <ReservedMission />
      </div>
      <div className="myrockets">
        <h3>My Rockets</h3>
        <ul>
          {reservedRocket.map((rocket) => (
            <li key={rocket.name}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
