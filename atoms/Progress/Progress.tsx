import React, { FunctionComponent } from 'react';
import { ProgressProps } from './Progress.types';
import styles from './Progress.module.css';

const Progress: FunctionComponent<ProgressProps> = ({
  radius,
  stroke,
  color,
  percent,
}) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = ((100 - percent) * circumference) / 100;

  return (
    <svg height={radius * 2} width={radius * 2} data-testid="progress">
      <circle
        className={styles.circle}
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default Progress;
