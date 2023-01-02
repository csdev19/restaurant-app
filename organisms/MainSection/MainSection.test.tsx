import MainSection from '@organisms/MainSection/MainSection';
import { URL_CV } from '@shared/constants';
import { render, screen } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('Tests of the MainSection component', () => {
  beforeEach(() => {
    render(<MainSection />);
  });

  it('Should render a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /Cristian Sotomayor/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('Should render a link', () => {
    const links: HTMLAnchorElement[] = screen.getAllByRole('link');

    expect(links[0].textContent).toEqual('main.button');
    expect(links[0].href).toEqual(URL_CV);
  });
});
