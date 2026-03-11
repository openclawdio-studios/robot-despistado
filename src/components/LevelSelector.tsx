import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LevelData } from '../types/level';

interface LevelSelectorProps {
  levels: LevelData[];
  unlockedLevel: number;
  onSelectLevel: (level: LevelData) => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({ levels, unlockedLevel, onSelectLevel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona Nivel</Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {levels.map((level) => {
          const isUnlocked = level.id <= unlockedLevel;
          return (
            <TouchableOpacity
              key={level.id}
              style={[styles.levelButton, !isUnlocked && styles.lockedButton]}
              onPress={() => isUnlocked && onSelectLevel(level)}
              disabled={!isUnlocked}
              testID={`level-button-${level.id}`}
            >
              <Text style={styles.levelText}>{level.id}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#1a1a2e',
    width: '100%',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  levelButton: {
    width: 60,
    height: 60,
    backgroundColor: '#0f3460',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  lockedButton: {
    backgroundColor: '#555',
  },
  levelText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
