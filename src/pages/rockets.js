import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getRocket,
  reserveRocket,
  cancelReserve,
} from '../redux/rockets/rocketSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(getRocket());
  }, []);

  return (
    <>
      <div className="rocket-container">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket">
            <img src={rocket.flickr_images} alt={rocket.id} />
            <div className="rocket-detail">
              <h2>{rocket.name}</h2>
              <p>
                {rocket.reserved && <span className="reserve">Reserved</span>}
                {rocket.description}
              </p>
              {rocket.reserved && (
                <button
                  className="cancel-btn"
                  onClick={() => {
                    dispatch(cancelReserve(rocket.id));
                  }}
                  type="button"
                >
                  Cancel Reservation
                </button>
              )}
              {!rocket.reserved && (
                <button
                  onClick={() => {
                    dispatch(reserveRocket(rocket.id));
                  }}
                  type="button"
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rockets;
