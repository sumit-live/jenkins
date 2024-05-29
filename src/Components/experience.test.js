import React from 'react';
import { render } from '@testing-library/react';
import Education from '../Components/education';

test('renders education component', () => {
  const { getByText } = render(<Education />);
  
  // Add assertions here to test the rendered output of the component
});