import React from 'react';
import { render } from '@testing-library/react-native';
import { CommandPalette } from './CommandPalette';

describe('CommandPalette', () => {
  const mockOnAddCommand = jest.fn();

  it('renders all command blocks', () => {
    const { getByTestId } = render(
      <CommandPalette onAddCommand={mockOnAddCommand} />
    );
    
    expect(getByTestId('command-block-UP')).toBeTruthy();
    expect(getByTestId('command-block-DOWN')).toBeTruthy();
    expect(getByTestId('command-block-LEFT')).toBeTruthy();
    expect(getByTestId('command-block-RIGHT')).toBeTruthy();
  });

  it('shows restricted commands with disabled appearance', () => {
    const { getByTestId } = render(
      <CommandPalette 
        onAddCommand={mockOnAddCommand} 
        allowedCommands={['RIGHT']} 
      />
    );
    
    // In React Native Testing Library, we can check for styles
    const upBlock = getByTestId('command-block-UP');
    const rightBlock = getByTestId('command-block-RIGHT');

    // UP should be disabled
    expect(upBlock.props.style).toContainEqual(expect.objectContaining({ backgroundColor: '#ccc' }));
    
    // RIGHT should not be disabled
    expect(rightBlock.props.style).not.toContainEqual(expect.objectContaining({ backgroundColor: '#ccc' }));
  });
});
