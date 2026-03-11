import { LevelData } from '../types/level';

export const LEVELS: LevelData[] = Array.from({ length: 30 }, (_, i) => {
  const levelId = i + 1;
  const isIntro = levelId <= 5;
  const isMid = levelId > 5 && levelId <= 15;
  
  // Complexity scaling
  const sizeX = isIntro ? 4 : isMid ? 5 : 6;
  const sizeY = isIntro ? 4 : isMid ? 5 : 6;
  
  // Obstacles scaling
  const obstacles = [];
  if (!isIntro) {
    const numObstacles = isMid ? 2 : 4;
    for (let o = 0; o < numObstacles; o++) {
      obstacles.push({
        x: Math.floor(Math.random() * (sizeX - 2)) + 1,
        y: Math.floor(Math.random() * (sizeY - 2)) + 1
      });
    }
  }

  return {
    id: levelId,
    sizeX,
    sizeY,
    robotPos: { x: 0, y: 0 },
    targetPos: { x: sizeX - 1, y: sizeY - 1 },
    obstacles,
    allowedCommands: ['UP', 'DOWN', 'LEFT', 'RIGHT'],
    tutorialStep: levelId === 1 ? {
      type: 'drag',
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    } : undefined
  };
});
