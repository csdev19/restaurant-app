import { BASE_STYLES } from '@atoms/LinkButton/LinkButton.constants';
import { LinkBaseProps } from '@atoms/LinkButton/LinkButton.types';
import clsx from 'clsx';
import { FunctionComponent } from 'react';
import styles from './LinkButton.module.css';

const LinkExternal: FunctionComponent<LinkBaseProps> = ({
  href = '',
  children,
  className = '',
}) => {
  const baseStyles = BASE_STYLES;
  if (!href.includes('http')) {
    throw new Error('The href must be an external link');
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx(baseStyles, 'word-break', styles.gradient1, className)}
    >
      {children}
    </a>
  );
};

export default LinkExternal;
