import React from 'react';
import { render } from '@testing-library/react';
import Education from '../Components/Education';

describe('Education Component', () => {
  it('renders without crashing', () => {
    render(<Education />);
  });
  // Add more tests here based on your component's functionality
});