import { CloseIcon } from '@shared/Icons';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Tests of the Button component', () => {
  it('Should render a button Raised', () => {
    const buttonContent = 'Button Raised';
    render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Button mode="raised" onClick={() => {}}>
        {buttonContent}
      </Button>,
    );
    const buttonElement = screen.getByRole('button', {
      name: buttonContent,
    });
    expect(buttonElement).toBeInTheDocument();

    const buttonElements: HTMLElement[] = screen.getAllByText(buttonContent);
    expect(buttonElements.length).toBe(1);
  });

  it('Should render a button with Icon', () => {
    const { getByTestId } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <Button mode="icon" onClick={() => {}}>
        <CloseIcon />
      </Button>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const icon = getByTestId('close-icon');
    expect(icon).toBeInTheDocument();
  });
});
