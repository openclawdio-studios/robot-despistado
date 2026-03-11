import React from 'react';
import { 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
  Bot, 
  Settings, 
  MousePointer2,
  AlertOctagon,
  Rocket,
  Star
} from 'lucide-react-native';

export type IconName = 
  | 'up' 
  | 'down' 
  | 'left' 
  | 'right' 
  | 'robot' 
  | 'target' 
  | 'obstacle'
  | 'hand'
  | 'rocket'
  | 'star';

interface IconManagerProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: any;
}

export const IconManager: React.FC<IconManagerProps> = ({ 
  name, 
  size = 24, 
  color = 'black',
  style
}) => {
  const IconComponent = getIconComponent(name);
  return <IconComponent size={size} color={color} style={style} />;
};

const getIconComponent = (name: IconName) => {
  switch (name) {
    case 'up':
      return ArrowUp;
    case 'down':
      return ArrowDown;
    case 'left':
      return ArrowLeft;
    case 'right':
      return ArrowRight;
    case 'robot':
      return Bot;
    case 'target':
      return Settings; // Engranaje
    case 'obstacle':
      return AlertOctagon;
    case 'hand':
      return MousePointer2;
    case 'rocket':
      return Rocket;
    case 'star':
      return Star;
    default:
      return Settings;
  }
};
