import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LevelGrid, LevelData } from './src/components/LevelGrid';
import { CommandPalette } from './src/components/CommandPalette';
import { Timeline } from './src/components/Timeline';
import { InstructionHand } from './src/components/InstructionHand';
import { Command, CommandType } from './src/types/commands';
import level1Data from './src/assets/level1.json';

const level1 = level1Data as LevelData;

export default function App() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [level] = useState<LevelData>(level1);

  const handleAddCommand = (type: CommandType) => {
    const newCommand: Command = {
      id: Math.random().toString(36).substring(2, 9),
      type,
    };
    setCommands([...commands, newCommand]);
  };

  const handleRemoveCommand = (id: string) => {
    setCommands(commands.filter(cmd => cmd.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Robot Despistado</Text>
      
      <View style={styles.content}>
        <LevelGrid level={level} />
        
        <Timeline 
          commands={commands} 
          onRemoveCommand={handleRemoveCommand}
        />
        
        <CommandPalette 
          onAddCommand={(type) => handleAddCommand(type)} 
          allowedCommands={level.allowedCommands}
        />
      </View>

      {level.tutorialStep && commands.length === 0 && (
        <InstructionHand 
          startX={level.tutorialStep.startX}
          startY={level.tutorialStep.startY}
          endX={level.tutorialStep.endX}
          endY={level.tutorialStep.endY}
        />
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
});
