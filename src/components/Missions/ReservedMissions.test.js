import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';
import ReservedMission from './ReservedMission';

// Mock the useSelector hook
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ReservedMission', () => {
  beforeEach(() => {
    useSelector.mockReset();
  });

  it('renders "My Missions" heading', () => {
    useSelector.mockReturnValue([]);
    render(<ReservedMission />);

    const heading = screen.getByRole('heading', { name: /My Missions/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders a list of reserved missions when there are missions', () => {
    const missions = [
      { id: 1, name: 'Mission 1' },
      { id: 2, name: 'Mission 2' },
    ];
    useSelector.mockReturnValue(missions);
    render(<ReservedMission />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    missions.forEach((mission) => {
      const listItem = screen.getByText(mission.name);
      expect(listItem).toBeInTheDocument();
    });
  });

  it('does not render a list of reserved missions when there are no missions', () => {
    useSelector.mockReturnValue([]);
    render(<ReservedMission />);
    const list = screen.queryByRole('list');
    expect(list).not.toBeInTheDocument();
  });
});
