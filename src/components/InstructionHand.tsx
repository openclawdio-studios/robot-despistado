import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

interface InstructionHandProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export const InstructionHand: React.FC<InstructionHandProps> = ({
  startX,
  startY,
  endX,
  endY,
}) => {
  const anim = useRef(new Animated.ValueXY({ x: startX, y: startY })).current;

  useEffect(() => {
    const move = () => {
      anim.setValue({ x: startX, y: startY });
      Animated.sequence([
        Animated.timing(anim, {
          toValue: { x: endX, y: endY },
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.delay(500),
      ]).start(() => move());
    };

    move();
  }, [startX, startY, endX, endY]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            { translateX: anim.x },
            { translateY: anim.y },
          ],
        },
      ]}
      pointerEvents="none"
    >
      <View style={styles.hand}>
        <Animated.Text style={styles.icon}>☝️</Animated.Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
  },
  hand: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
});
