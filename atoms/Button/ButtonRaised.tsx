import { FunctionComponent } from 'react';
import { ButtonBaseProps } from '@atoms/Button/Button.types';
import clsx from 'clsx';
import styles from './Button.module.css';

export const ButtonRaised: FunctionComponent<ButtonBaseProps> = ({
  children,
  onClick,
  classNames,
  color = 'none',
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        'py-3 px-7',
        classNames,
        color != 'none' && styles[`${color}-color`],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
