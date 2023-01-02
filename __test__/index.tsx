import MainSection from '@organisms/MainSection';
import { render, screen } from '@testing-library/react';

describe('MainSection', () => {
  beforeEach(() => {
    render(<MainSection />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Cristian Sotomayor/i,
    });

    expect(heading).toBeInTheDocument();
    // expect(true).toBe(true);
  });
});
