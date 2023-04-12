import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../pages/rockets';

const mockStore = configureMockStore();
const store = mockStore({
  rockets: [
    {
      id: 'falcon1',
      name: 'Falcon 1',
      description:
        'The first privately developed liquid-fueled orbital launch vehicle.',
      flickr_images: 'https://www.example.com/falcon1.jpg',
      reserved: false,
    },
    {
      id: 'falcon9',
      name: 'Falcon 9',
      description:
        'A partially reusable medium-lift launch vehicle designed and manufactured by SpaceX.',
      flickr_images: 'https://www.example.com/falcon9.jpg',
      reserved: true,
    },
  ],
});

describe('Rockets component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
