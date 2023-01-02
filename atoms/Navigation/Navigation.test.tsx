import Navigation from '@atoms/Navigation/Navigation';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test of the Navigation component', () => {
  it('Should render the navigation component', async () => {
    render(
      <Navigation>
        <h1>Hello navigation</h1>
      </Navigation>,
    );

    const header = screen.getByRole('heading', {
      name: /Hello navigation/i,
    });
    expect(header).toBeInTheDocument();

    const navigation: HTMLElement = header.parentElement;
    expect(navigation).toBeInTheDocument();

    expect(navigation).toHaveClass('opacity-100');
    await fireEvent.scroll(window, { target: { scrollY: -500 } });
    expect(navigation).toHaveClass('opacity-95');
  });
});
