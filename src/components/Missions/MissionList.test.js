import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import MissionList from './MissionList';

const mockStore = configureMockStore();

describe('MissionList', () => {
  it('renders correctly', () => {
    const store = mockStore({
      mission: {
        missionList: [
          {
            mission_id: '1',
            mission_name: 'Mission 1',
            description: 'Mission 1 Description',
          },
          {
            mission_id: '2',
            mission_name: 'Mission 2',
            description: 'Mission 2 Description',
          },
        ],
        isLoading: false,
      },
    });
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionList />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
