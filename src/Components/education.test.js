// tests/Education.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Education from '../src/components/education';

describe('Education Component', () => {
  it('renders the education section', () => {
    const { getByText } = render(<Education />);

    expect(getByText('Education')).toBeInTheDocument();
    expect(getByText('Deakin University, Burwood, Melbourne, Australia')).toBeInTheDocument();
    expect(getByText('University Institute of Engineering and Technology, Kurukshetra University, Kurukshetra, India')).toBeInTheDocument();
  });
});
