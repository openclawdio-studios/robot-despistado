import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

export type EmotionState = 'idle' | 'happy' | 'surprise' | 'error';

interface VirtualProfessorProps {
  state: EmotionState;
}

export const VirtualProfessor: React.FC<VirtualProfessorProps> = ({ state }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (state === 'happy' || state === 'surprise') {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (state === 'error') {
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
  }, [state, scaleAnim, shakeAnim]);

  const getFace = () => {
    switch (state) {
      case 'happy': return '😊';
      case 'surprise': return '😲';
      case 'error': return '😵';
      case 'idle':
      default: return '🙂';
    }
  };

  return (
    <View style={styles.container} testID="professor-container">
      <Animated.View
        style={[
          styles.avatar,
          {
            transform: [
              { scale: scaleAnim },
              { translateX: shakeAnim }
            ]
          }
        ]}
      >
        <Text style={styles.face} testID="professor-face">{getFace()}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  face: {
    fontSize: 30,
  },
});
