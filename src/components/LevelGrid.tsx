import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CommandType } from '../types/commands';

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

        if (isRobot(x, y)) {
          cellStyle = styles.robotCell;
          testID = `cell-robot-${x}-${y}`;
        } else if (isTarget(x, y)) {
          cellStyle = styles.targetCell;
          testID = `cell-target-${x}-${y}`;
        } else if (isObstacle(x, y)) {
          cellStyle = styles.obstacleCell;
          testID = `cell-obstacle-${x}-${y}`;
        }

        row.push(
          <View key={`${x}-${y}`} style={[styles.cell, cellStyle]} testID={testID} />
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
  },
  emptyCell: {
    backgroundColor: '#fff',
  },
  robotCell: {
    backgroundColor: 'blue',
  },
  targetCell: {
    backgroundColor: 'gold',
  },
  obstacleCell: {
    backgroundColor: 'gray',
  },
});