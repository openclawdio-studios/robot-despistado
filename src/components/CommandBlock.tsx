import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CommandType } from '../types/commands';
import { IconManager, IconName } from './IconManager';

interface CommandBlockProps {
  type: CommandType;
  size?: number;
  disabled?: boolean;
}

const getIconName = (type: CommandType): IconName => {
  switch (type) {
    case 'UP': return 'up';
    case 'DOWN': return 'down';
    case 'LEFT': return 'left';
    case 'RIGHT': return 'right';
  }
};

export const CommandBlock: React.FC<CommandBlockProps> = ({ type, size = 60, disabled }) => {
  const iconSize = size * 0.6;
  return (
    <View 
      style={[
        styles.block, 
        { width: size, height: size },
        disabled && styles.disabledBlock
      ]} 
      testID={`command-block-${type}`}
    >
      <IconManager 
        name={getIconName(type)} 
        size={iconSize} 
        color={disabled ? '#999' : '#333'} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  disabledBlock: {
    backgroundColor: '#ccc',
    borderColor: '#999',
    elevation: 0,
    shadowOpacity: 0,
  },
});
