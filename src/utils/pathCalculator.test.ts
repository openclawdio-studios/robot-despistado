import { calculateGhostPath } from './pathCalculator';
import { LevelData } from '../components/LevelGrid';

describe('calculateGhostPath', () => {
  const mockLevel: LevelData = {
    sizeX: 3,
    sizeY: 3,
    robotPos: { x: 0, y: 0 },
    targetPos: { x: 2, y: 2 },
    obstacles: [{ x: 1, y: 1 }],
  };

  it('calculates a valid path correctly', () => {
    const commands: any[] = ['RIGHT', 'DOWN'];
    const path = calculateGhostPath(mockLevel, commands);
    
    expect(path).toHaveLength(2);
    expect(path[0]).toEqual({ x: 1, y: 0, isValid: true });
    expect(path[1]).toEqual({ x: 1, y: 1, isValid: false }); // Hit obstacle
  });

  it('marks collision as invalid and subsequent steps as invalid', () => {
    const commands: any[] = ['RIGHT', 'DOWN', 'RIGHT'];
    const path = calculateGhostPath(mockLevel, commands);
    
    expect(path).toHaveLength(3);
    expect(path[0].isValid).toBe(true);  // (1,0)
    expect(path[1].isValid).toBe(false); // (1,1) obstacle
    expect(path[2].isValid).toBe(false); // (2,1) even if free, path is broken
  });

  it('detects out of bounds', () => {
    const commands: any[] = ['UP'];
    const path = calculateGhostPath(mockLevel, commands);
    
    expect(path).toHaveLength(1);
    expect(path[0]).toEqual({ x: 0, y: -1, isValid: false });
  });

  it('returns empty path for no commands', () => {
    const path = calculateGhostPath(mockLevel, []);
    expect(path).toHaveLength(0);
  });
});
