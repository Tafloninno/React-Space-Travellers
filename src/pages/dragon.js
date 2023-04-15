import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDragons,
  reserveDragons,
  cancelReserve,
} from '../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dragons = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons.length) dispatch(getDragons());
  }, []);

  return (
    <>
      <div className="rocket-container">
        {dragons.map((dragon) => (
          <div key={dragon.id} className="rocket">
            <img src={dragon.flickr_images} alt={rocket.id} />
            <div className="rocket-detail">
              <h2>{dragon.name}</h2>
              <p>
                {dragon.reserved && <span className="reserve">Reserved</span>}
                {dragon.description}
              </p>
              {dragon.reserved && (
                <button
                  className="cancel-btn"
                  onClick={() => {
                    dispatch(cancelReserve(dragon.id));
                  }}
                  type="button"
                >
                  Cancel Reservation
                </button>
              )}
              {!dragon.reserved && (
                <button
                  onClick={() => {
                    dispatch(reserveRocket(dragon.id));
                  }}
                  type="button"
                >
                  Reserve Dragons
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dragons;
