import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LevelGrid } from './src/components/LevelGrid';
import { CommandPalette } from './src/components/CommandPalette';
import { Timeline } from './src/components/Timeline';
import { InstructionHand } from './src/components/InstructionHand';
import { Command, CommandType } from './src/types/commands';
import { LevelData } from './src/types/level';
import { LEVELS } from './src/data/levels';
import { LevelSelector } from './src/components/LevelSelector';

export default function App() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentLevel, setCurrentLevel] = useState<LevelData | null>(null);
  const [unlockedLevel, setUnlockedLevel] = useState<number>(1);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const saved = await AsyncStorage.getItem('unlockedLevel');
      if (saved) {
        setUnlockedLevel(parseInt(saved, 10));
      }
    } catch (e) {
      console.error('Failed to load progress', e);
    }
  };

  const saveProgress = async (levelId: number) => {
    try {
      if (levelId > unlockedLevel) {
        await AsyncStorage.setItem('unlockedLevel', levelId.toString());
        setUnlockedLevel(levelId);
      }
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  };

  const handleLevelSelect = (level: LevelData) => {
    setCurrentLevel(level);
    setCommands([]);
  };

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

  const handleSimulateWin = () => {
    if (currentLevel && currentLevel.id < 30) {
      saveProgress(currentLevel.id + 1);
      setCurrentLevel(null); // Return to selector
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!currentLevel ? (
        <LevelSelector 
          levels={LEVELS} 
          unlockedLevel={unlockedLevel} 
          onSelectLevel={handleLevelSelect} 
        />
      ) : (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setCurrentLevel(null)} style={styles.backButton}>
              <Text style={styles.backText}>{'< Volver'}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Nivel {currentLevel.id}</Text>
          </View>
          
          <View style={styles.content}>
            <LevelGrid level={currentLevel} />
            
            <Timeline 
              commands={commands} 
              onRemoveCommand={handleRemoveCommand}
            />
            
            <CommandPalette 
              onAddCommand={(type) => handleAddCommand(type)} 
              allowedCommands={currentLevel.allowedCommands}
            />
            
            <TouchableOpacity style={styles.winBtn} onPress={handleSimulateWin}>
              <Text style={styles.winText}>Simular Victoria</Text>
            </TouchableOpacity>
          </View>

          {currentLevel.tutorialStep && commands.length === 0 && (
            <InstructionHand 
              startX={currentLevel.tutorialStep.startX}
              startY={currentLevel.tutorialStep.startY}
              endX={currentLevel.tutorialStep.endX}
              endY={currentLevel.tutorialStep.endY}
            />
          )}
        </>
      )}

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 20,
  },
  backText: {
    color: '#0f3460',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  winBtn: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
  },
  winText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
