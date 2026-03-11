import { CommandType } from './commands';

export interface Position {
  x: number;
  y: number;
}

export interface TutorialStep {
  type: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export interface LevelData {
  id: number;
  sizeX: number;
  sizeY: number;
  robotPos: Position;
  targetPos: Position;
  obstacles: Position[];
  allowedCommands?: CommandType[];
  tutorialStep?: TutorialStep;
}
