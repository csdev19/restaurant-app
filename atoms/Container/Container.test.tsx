import Container from './Container';
import { render, screen } from '@testing-library/react';

describe('Test of the Container component', () => {
  it('Should render the container component on plain mode without extra classes', () => {
    render(
      <Container mode="plain">
        <h1>Hello container</h1>
      </Container>,
    );
    const header = screen.getByRole('heading', {
      name: /hello container/i,
    });
    expect(header).toBeInTheDocument();

    const container: HTMLElement = header.parentElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('sm:px-0');
    expect(container).toHaveClass('px-8');
  });

  it('Should render the container component on plain mode with extra classes', () => {
    const extraClasses = ['random-class1', 'random-class2'];
    render(
      <Container mode="plain" className={extraClasses.join(' ')}>
        <h1>Hello container</h1>
      </Container>,
    );
    const header = screen.getByRole('heading', {
      name: /hello container/i,
    });
    expect(header).toBeInTheDocument();

    const container: HTMLElement = header.parentElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('sm:px-0');
    expect(container).toHaveClass('px-8');
    extraClasses.forEach((item) => {
      expect(container).toHaveClass(item);
    });
  });

  it('Should render the container component on normal mode without extra classes', () => {
    render(
      <Container mode="normal">
        <h1>Hello container</h1>
      </Container>,
    );
    const header = screen.getByRole('heading', {
      name: /hello container/i,
    });
    expect(header).toBeInTheDocument();

    const container: HTMLElement = header.parentElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('sm:px-0');
    expect(container).toHaveClass('px-8');
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('mx-auto');
  });

  it('Should render the container component on normal mode with extra classes', () => {
    const extraClasses = ['random-class1', 'random-class2'];
    render(
      <Container mode="normal" className={extraClasses.join(' ')}>
        <h1>Hello container</h1>
      </Container>,
    );
    const header = screen.getByRole('heading', {
      name: /hello container/i,
    });
    expect(header).toBeInTheDocument();

    const container: HTMLElement = header.parentElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('sm:px-0');
    expect(container).toHaveClass('px-8');
    expect(container).toHaveClass('container');
    expect(container).toHaveClass('mx-auto');
    extraClasses.forEach((item) => {
      expect(container).toHaveClass(item);
    });
  });
});
