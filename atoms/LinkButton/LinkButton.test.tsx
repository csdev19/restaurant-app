import LinkExternal from '@atoms/LinkButton/LinkExternal';
import LinkInternal from '@atoms/LinkButton/LinkInternal';
import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('Test of the Link button component', () => {
  it('Should render the external link component', () => {
    const text = 'External link';
    const href = 'https://www.google.com';
    render(<LinkExternal href={href}>{text}</LinkExternal>);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('href', href);
  });
  it('Should render the internal link component', () => {
    const text = 'Internal link';
    const href = '/internal';
    render(<LinkInternal href={href}>{text}</LinkInternal>);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('href', href);
  });
  it('Should render the link button component with internal mode', () => {
    const text = 'Internal link';
    const href = '/contact';
    render(<LinkButton href={href}>{text}</LinkButton>);
    const link = screen.getByText(text);

    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('href', href);
  });
  it('Should render the link button component with external mode', () => {
    const text = 'External link';
    const href = 'https://www.google.com';
    render(
      <LinkButton href={href} type="external">
        {text}
      </LinkButton>,
    );
    const link = screen.getByText(text);

    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('href', href);
  });
});
