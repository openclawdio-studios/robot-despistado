import React from 'react';
import { render } from '@testing-library/react-native';
import { LevelGrid, LevelData } from './LevelGrid';

describe('LevelGrid', () => {
  const mockLevel: LevelData = {
    sizeX: 3,
    sizeY: 3,
    robotPos: { x: 0, y: 0 },
    targetPos: { x: 2, y: 2 },
    obstacles: [{ x: 1, y: 1 }],
  };

  it('renders the grid based on JSON data', () => {
    const { getByTestId } = render(<LevelGrid level={mockLevel} />);
    
    expect(getByTestId('level-grid')).toBeTruthy();
    expect(getByTestId('cell-robot-0-0')).toBeTruthy();
    expect(getByTestId('cell-target-2-2')).toBeTruthy();
    expect(getByTestId('cell-obstacle-1-1')).toBeTruthy();
    expect(getByTestId('cell-empty-0-1')).toBeTruthy();
  });
});