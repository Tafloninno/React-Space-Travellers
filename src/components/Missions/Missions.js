import React, { useState, useEffect } from "react";
import "./Missions.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  cancelMission,
  reserveMission,
  addReservedMission,
  leaveReservedMission,
} from "../../redux/missions/missionSlice";

const AllMissions = ({ id, name, desc }) => {
  const dispatch = useDispatch();

  const [joined, setJoined] = useState(
    localStorage.getItem(`mission-${id}`) === "true" || false
  );

  useEffect(() => {
    localStorage.setItem(`mission-${id}`, joined);
  }, [id, joined]);

  const handleReserveClick = () => {
    const mission = { id, name, desc };
    dispatch(reserveMission(mission));
    dispatch(addReservedMission(mission));
    setJoined(true);
  };

  const handleCancel = (id) => {
    dispatch(leaveReservedMission(id));
    dispatch(cancelMission(id));
    setJoined(false);
  };

  return (
    <table>
      <tbody>
        <tr key={id}>
          <td className="name">{name}</td>
          <td className="desc">{desc}</td>
          <td className="btn-group">
            {joined && (
              <>
                <button type="button" className="active-member" disabled>
                  Active Member
                </button>
                <button
                  type="button"
                  className="leave-mission"
                  onClick={() => handleCancel(id)}
                >
                  Leave Mission
                </button>
              </>
            )}
            {!joined && (
              <>
                <button type="button" className="not-member" disabled>
                  NOT A MEMBER
                </button>
                <button
                  type="button"
                  className="join-mission"
                  onClick={handleReserveClick}
                >
                  Join Mission
                </button>
              </>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

AllMissions.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default AllMissions;
