import { ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
  mode?: ContainerModes;
};

export type ContainerModes = 'normal' | 'plain';
