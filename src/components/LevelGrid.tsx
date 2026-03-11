import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CommandType } from '../types/commands';
import { IconManager } from './IconManager';

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
  sizeX: number;
  sizeY: number;
  robotPos: Position;
  targetPos: Position;
  obstacles: Position[];
  allowedCommands?: CommandType[];
  tutorialStep?: TutorialStep;
}

interface LevelGridProps {
  level: LevelData;
}

export const LevelGrid: React.FC<LevelGridProps> = ({ level }) => {
  const { sizeX, sizeY, robotPos, targetPos, obstacles } = level;

  const isRobot = (x: number, y: number) => robotPos.x === x && robotPos.y === y;
  const isTarget = (x: number, y: number) => targetPos.x === x && targetPos.y === y;
  const isObstacle = (x: number, y: number) => 
    obstacles.some(obs => obs.x === x && obs.y === y);

  const renderCells = () => {
    const cells = [];
    for (let y = 0; y < sizeY; y++) {
      const row = [];
      for (let x = 0; x < sizeX; x++) {
        let cellStyle = styles.emptyCell;
        let testID = `cell-empty-${x}-${y}`;
        let content = null;

        if (isRobot(x, y)) {
          testID = `cell-robot-${x}-${y}`;
          content = <IconManager name="robot" size={24} color="#3b82f6" />;
        } else if (isTarget(x, y)) {
          testID = `cell-target-${x}-${y}`;
          content = <IconManager name="target" size={24} color="#fbbf24" />;
        } else if (isObstacle(x, y)) {
          testID = `cell-obstacle-${x}-${y}`;
          content = <IconManager name="obstacle" size={24} color="#ef4444" />;
        }

        row.push(
          <View key={`${x}-${y}`} style={[styles.cell, cellStyle]} testID={testID}>
            {content}
          </View>
        );
      }
      cells.push(
        <View key={`row-${y}`} style={styles.row}>
          {row}
        </View>
      );
    }
    return cells;
  };

  return <View style={styles.gridContainer} testID="level-grid">{renderCells()}</View>;
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 10,
    backgroundColor: '#333',
    alignSelf: 'center',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40,
    height: 40,
    margin: 2,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCell: {
    backgroundColor: '#fff',
  },
});
