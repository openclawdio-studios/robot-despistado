import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';
import { CommandBlock } from './CommandBlock';
import { CommandType } from '../types/commands';

interface DraggableCommandProps {
  type: CommandType;
  onDrop: (type: CommandType, x: number, y: number) => void;
  disabled?: boolean;
}

export const DraggableCommand: React.FC<DraggableCommandProps> = ({ type, onDrop, disabled }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !disabled,
      onMoveShouldSetPanResponder: () => !disabled,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        if (!disabled) {
          onDrop(type, gestureState.moveX, gestureState.moveY);
        }
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
        zIndex: disabled ? 0 : 100,
      }}
      {...panResponder.panHandlers}
    >
      <CommandBlock type={type} disabled={disabled} />
    </Animated.View>
  );
};

interface CommandPaletteProps {
  onAddCommand: (type: CommandType, x: number, y: number) => void;
  allowedCommands?: CommandType[];
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onAddCommand, allowedCommands }) => {
  const commands: CommandType[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];

  return (
    <View style={styles.palette} testID="command-palette">
      {commands.map((type) => (
        <DraggableCommand 
          key={type} 
          type={type} 
          onDrop={onAddCommand} 
          disabled={allowedCommands ? !allowedCommands.includes(type) : false}
        />
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
