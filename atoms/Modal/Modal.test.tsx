import Modal from './Modal';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test of the Modal component', () => {
  it('Should render the modal component', async () => {
    let closed = false;
    render(
      <Modal
        open={true}
        onClose={() => {
          closed = true;
        }}
      >
        <h1>Hello modal</h1>
      </Modal>,
    );

    const header = screen.getByRole('heading', {
      name: /hello modal/i,
    });
    expect(header).toBeInTheDocument();

    const modal: HTMLElement = header.parentElement;
    expect(modal).toBeInTheDocument();

    const button = await screen.findByTestId('close-button');

    fireEvent.click(button);

    expect(closed).toBeTruthy();
  });
});
