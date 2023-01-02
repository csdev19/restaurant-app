import React, { FunctionComponent } from 'react';
import { ButtonBaseProps } from '@atoms/Button/Button.types';
import clsx from 'clsx';
import styles from './Button.module.css';

export const ButtonIcon: FunctionComponent<ButtonBaseProps> = ({
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
        'p-1 rounded-full',
        classNames,
        color != 'none' && styles[`${color}-color`],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
