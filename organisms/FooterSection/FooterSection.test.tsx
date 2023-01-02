import { URL_CV } from '@shared/constants';
import { render, screen } from '@testing-library/react';
import FooterSection from './FooterSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('Tests of the FooterSection component', () => {
  beforeEach(() => {
    render(<FooterSection />);
  });

  it('Should render heading', () => {
    const heading = screen.getByRole('heading', {
      name: /footer.contact/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('Should render the links correctly', () => {
    const localUrl = 'http://localhost';
    const links: HTMLAnchorElement[] = screen.getAllByRole('link');

    expect(links[0].textContent).toEqual('main.button');
    expect(links[0].href).toEqual(URL_CV);

    expect(links[1].textContent).toEqual('link.home');
    expect(links[1].href).toEqual(`${localUrl}/`);

    expect(links[2].textContent).toEqual('link.contact');
    expect(links[2].href).toEqual(`${localUrl}/contact`);
  });
});
