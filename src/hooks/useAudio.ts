import { useEffect, useRef, useCallback } from 'react';
import { Audio } from 'expo-av';

export const SOUND_ASSETS = {
  success: require('../assets/sounds/success.mp3'),
  chime: require('../assets/sounds/chime.mp3'),
  error: require('../assets/sounds/error.mp3'),
  ignition: require('../assets/sounds/ignition.mp3'),
};

export type SoundType = keyof typeof SOUND_ASSETS;

export function useAudio() {
  const soundObjects = useRef<Record<string, Audio.Sound>>({});

  useEffect(() => {
    return () => {
      Object.values(soundObjects.current).forEach((sound) => {
        sound.unloadAsync().catch(() => {});
      });
    };
  }, []);

  const playSound = useCallback(async (type: SoundType) => {
    try {
      const source = SOUND_ASSETS[type];
      const { sound } = await Audio.Sound.createAsync(source);
      
      soundObjects.current[type] = sound;
      
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync().catch(() => {});
          delete soundObjects.current[type];
        }
      });

      await sound.playAsync();
    } catch (error) {
      console.warn(`Failed to play sound: ${type}`, error);
    }
  }, []);

  return { playSound };
}
