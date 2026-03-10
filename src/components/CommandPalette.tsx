import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import { CommandBlock } from './CommandBlock';
import { CommandType } from '../types/commands';

interface DraggableCommandProps {
  type: CommandType;
  onDrop: (type: CommandType, x: number, y: number) => void;
}

export const DraggableCommand: React.FC<DraggableCommandProps> = ({ type, onDrop }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        onDrop(type, gestureState.moveX, gestureState.moveY);
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
        zIndex: 100,
      }}
      {...panResponder.panHandlers}
    >
      <CommandBlock type={type} />
    </Animated.View>
  );
};

interface CommandPaletteProps {
  onAddCommand: (type: CommandType, x: number, y: number) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onAddCommand }) => {
  const commands: CommandType[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];

  return (
    <View style={styles.palette} testID="command-palette">
      {commands.map((type) => (
        <DraggableCommand key={type} type={type} onDrop={onAddCommand} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  palette: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    marginVertical: 10,
    justifyContent: 'space-around',
    width: '90%',
  },
});
