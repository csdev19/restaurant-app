import HoveredCard from '@atoms/HoveredCard/HoveredCard';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Tests of the HoveredCard componet', () => {
  it('Should render the hovered card', () => {
    let baseNumber = 0;
    let baseState = false;

    render(
      <HoveredCard
        onClick={() => baseNumber++}
        emitChanges={(change) => {
          baseState = change;
        }}
      >
        <h1>Hello card</h1>
      </HoveredCard>,
    );

    const header = screen.getByRole('heading', {
      name: /hello card/i,
    });
    expect(header).toBeInTheDocument();

    const container: HTMLElement = header.parentElement;
    expect(container).toBeInTheDocument();

    // Check the base number
    expect(baseNumber).toBe(0);
    // Check the base state
    expect(baseState).toBe(false);

    // Click the element
    fireEvent.click(container);

    // Check the new base number
    expect(baseNumber).toBe(1);
  });
});
