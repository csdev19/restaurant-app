import React, { FunctionComponent, useEffect, useState } from 'react';
import clsx from 'clsx';
import useWindowSize from '@shared/hooks/useWindowSize';
import { HoveredCardProps } from './HoveredCard.types';
import styles from './HoveredCard.module.css';

const HoveredCard: FunctionComponent<HoveredCardProps> = ({
  children,
  onClick,
  emitChanges,
}) => {
  const [windowSize] = useWindowSize();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    emitChanges && emitChanges(hovered);
  }, [hovered]);

  useEffect(() => {
    if (windowSize.width < 600) {
      setHovered(true);
    } else {
      setHovered(false);
    }
  }, [windowSize]);

  return (
    <div
      className={clsx(
        'cursor-pointer',
        'm-auto',
        'relative',
        'rounded-xl',
        'bg-cs-soft-gray',
        'dark:bg-cs-black',
        hovered && styles.shadowPopBl,
      )}
      onClick={onClick}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {children}
    </div>
  );
};

export default HoveredCard;
