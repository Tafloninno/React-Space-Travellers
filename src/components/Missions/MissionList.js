import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllMissions from './Missions';
import { getMissions } from '../../redux/missions/missionSlice';
import './Missions.css';

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
    <div className="mission-list-container">
      <table>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
      <table className="mission-list-table">
        <tbody>
          {missionList.map((mission) => (
            <AllMissions
              key={mission.mission_id}
              name={mission.mission_name}
              desc={mission.description}
              id={mission.mission_id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;
