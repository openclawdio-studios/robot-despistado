import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { CommandBlock } from './CommandBlock';
import { CommandType, Command } from '../types/commands';

interface TimelineProps {
  commands: Command[];
  onRemoveCommand: (id: string) => void;
  onLayout?: (event: any) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ commands, onRemoveCommand, onLayout }) => {
  return (
    <View style={styles.container} onLayout={onLayout} testID="timeline">
      <Text style={styles.label}>Cinta de Comandos</Text>
      <ScrollView 
        horizontal 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {commands.length === 0 ? (
          <Text style={styles.placeholder}>Arrastra flechas aquí...</Text>
        ) : (
          commands.map((cmd) => (
            <TouchableOpacity key={cmd.id} onPress={() => onRemoveCommand(cmd.id)}>
              <CommandBlock type={cmd.type} size={50} />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    padding: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    minWidth: '100%',
  },
  placeholder: {
    color: '#ccc',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
  },
});
