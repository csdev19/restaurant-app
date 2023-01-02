import React, { FunctionComponent } from 'react';
import { BaseIconProps } from '../interfaces/icon.interfaces';

const CloseIcon: FunctionComponent<BaseIconProps> = ({
  height = '24px',
  width = '24px',
}) => {
  return (
    <>
      <svg
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        data-testid="close-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </>
  );
};

export default CloseIcon;
