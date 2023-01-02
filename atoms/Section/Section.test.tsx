import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('MainSection', () => {
  beforeEach(() => {
    render(
      <Section>
        <h1>Hola</h1>
      </Section>,
    );
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /hola/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
