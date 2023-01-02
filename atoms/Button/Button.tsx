import React, { FunctionComponent } from 'react';
import { ButtonProps } from './Button.types';
import { ButtonIcon } from './ButtonIcon';
import { ButtonRaised } from './ButtonRaised';

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  mode = 'raised',
  classNames = '',
  color = 'none',
  ...props
}) => (
  <>
    {
      {
        icon: (
          <ButtonIcon
            {...props}
            color={color}
            classNames={classNames}
            onClick={onClick}
          >
            {children}
          </ButtonIcon>
        ),
        raised: (
          <ButtonRaised
            {...props}
            color={color}
            classNames={classNames}
            onClick={onClick}
          >
            {children}
          </ButtonRaised>
        ),
      }[mode]
    }
  </>
);

export default Button;
