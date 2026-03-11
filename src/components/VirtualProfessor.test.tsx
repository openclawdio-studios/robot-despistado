import React from 'react';
import { render } from '@testing-library/react-native';
import { VirtualProfessor } from './VirtualProfessor';

describe('VirtualProfessor', () => {
  it('renders correctly in idle state', () => {
    const { getByTestId } = render(<VirtualProfessor state="idle" />);
    const face = getByTestId('professor-face');
    expect(face.props.children).toBe('🙂');
  });

  it('renders happy face when state is happy', () => {
    const { getByTestId } = render(<VirtualProfessor state="happy" />);
    const face = getByTestId('professor-face');
    expect(face.props.children).toBe('😊');
  });

  it('renders surprise face when state is surprise', () => {
    const { getByTestId } = render(<VirtualProfessor state="surprise" />);
    const face = getByTestId('professor-face');
    expect(face.props.children).toBe('😲');
  });

  it('renders error face when state is error', () => {
    const { getByTestId } = render(<VirtualProfessor state="error" />);
    const face = getByTestId('professor-face');
    expect(face.props.children).toBe('😵');
  });
});
