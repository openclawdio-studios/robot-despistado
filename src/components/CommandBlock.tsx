import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CommandType } from '../types/commands';

interface CommandBlockProps {
  type: CommandType;
  size?: number;
}

const getIcon = (type: CommandType) => {
  switch (type) {
    case 'UP': return '⬆️';
    case 'DOWN': return '⬇️';
    case 'LEFT': return '⬅️';
    case 'RIGHT': return '➡️';
  }
};

export const CommandBlock: React.FC<CommandBlockProps> = ({ type, size = 60 }) => {
  return (
    <View style={[styles.block, { width: size, height: size }]} testID={`command-block-${type}`}>
      <Text style={[styles.icon, { fontSize: size * 0.6 }]}>{getIcon(type)}</Text>
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
  icon: {
    textAlign: 'center',
  },
});
