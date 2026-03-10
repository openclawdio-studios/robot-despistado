import React from 'react';
import { render } from '@testing-library/react-native';
import { InstructionHand } from './InstructionHand';

describe('InstructionHand', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <InstructionHand startX={0} startY={0} endX={100} endY={100} />
    );
    expect(getByText('☝️')).toBeTruthy();
  });
});
