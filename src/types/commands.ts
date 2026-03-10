export type CommandType = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export interface Command {
  id: string;
  type: CommandType;
}

export interface PathStep {
  x: number;
  y: number;
  isValid: boolean;
}
