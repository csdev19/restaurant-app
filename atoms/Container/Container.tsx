import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { ContainerProps } from './Container.types';

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className = '',
  mode = 'normal',
}) => {
  return (
    <div
      className={clsx(
        mode === 'normal' && 'container mx-auto',
        'sm:px-0 px-8',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
