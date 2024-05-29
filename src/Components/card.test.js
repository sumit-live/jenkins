import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from '../src/components/Card';

describe('Card Component', () => {
  it('renders the title and children', () => {
    const { getByText } = render(
      <Card title="Test Title">
        <p>Test Content</p>
      </Card>
    );

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies additional class names', () => {
    const { container } = render(
      <Card title="Test Title" className="additional-class">
        <p>Test Content</p>
      </Card>
    );

    expect(container.firstChild).toHaveClass('additional-class');
  });
});
