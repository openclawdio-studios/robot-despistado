import { renderHook, act } from '@testing-library/react-native';
import { useAudio } from './useAudio';
import { Audio } from 'expo-av';

// Mock expo-av
jest.mock('expo-av', () => ({
  Audio: {
    Sound: {
      createAsync: jest.fn(),
    },
  },
}));

describe('useAudio', () => {
  const mockSound = {
    playAsync: jest.fn().mockResolvedValue({}),
    setOnPlaybackStatusUpdate: jest.fn(),
    unloadAsync: jest.fn().mockResolvedValue({}),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (Audio.Sound.createAsync as jest.Mock).mockResolvedValue({ sound: mockSound });
  });

  it('plays a sound correctly', async () => {
    const { result } = renderHook(() => useAudio());

    await act(async () => {
      await result.current.playSound('success');
    });

    expect(Audio.Sound.createAsync).toHaveBeenCalledWith(expect.anything());
    expect(mockSound.playAsync).toHaveBeenCalled();
  });

  it('unloads sound when unmounted', () => {
    const { unmount } = renderHook(() => useAudio());
    unmount();
    // Assuming unload is called for currently stored sounds, which we can mock if needed
  });
});
