import { CommandType, PathStep } from '../types/commands';
import { LevelData, Position } from '../components/LevelGrid';

export const calculateGhostPath = (
  level: LevelData,
  commands: CommandType[]
): PathStep[] => {
  const { sizeX, sizeY, robotPos, obstacles } = level;
  const path: PathStep[] = [];
  let currentPos: Position = { ...robotPos };
  let hasCollided = false;

  for (const cmd of commands) {
    const nextPos: Position = { ...currentPos };

    switch (cmd) {
      case 'UP':
        nextPos.y -= 1;
        break;
      case 'DOWN':
        nextPos.y += 1;
        break;
      case 'LEFT':
        nextPos.x -= 1;
        break;
      case 'RIGHT':
        nextPos.x += 1;
        break;
    }

    const isOutOfBounds =
      nextPos.x < 0 || nextPos.x >= sizeX || nextPos.y < 0 || nextPos.y >= sizeY;
    
    const isObstacle = obstacles.some(
      (obs) => obs.x === nextPos.x && obs.y === nextPos.y
    );

    if (hasCollided) {
      path.push({ ...nextPos, isValid: false });
    } else if (isOutOfBounds || isObstacle) {
      hasCollided = true;
      path.push({ ...nextPos, isValid: false });
    } else {
      path.push({ ...nextPos, isValid: true });
      currentPos = nextPos;
    }
  }

  return path;
};
