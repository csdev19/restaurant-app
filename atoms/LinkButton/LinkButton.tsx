import React, { FunctionComponent } from 'react';
import { LinkButtonProps } from './LinkButton.types';
import LinkInternal from '@atoms/LinkButton/LinkInternal';
import LinkExternal from '@atoms/LinkButton/LinkExternal';

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  href = '',
  children,
  className = '',
  type = 'internal',
}) => {
  return (
    <>
      {
        {
          internal: (
            <LinkInternal className={className} href={href}>
              {children}
            </LinkInternal>
          ),
          external: (
            <LinkExternal className={className} href={href}>
              {children}
            </LinkExternal>
          ),
        }[type]
      }
    </>
  );
};

export default LinkButton;
