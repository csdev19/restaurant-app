import React, { FunctionComponent, useEffect, useState } from 'react';
import Progress from '@atoms/Progress';
import { ProgressContainerProps } from '@molecules/ProgressContainer/ProgressContainer.types';

const ProgressContainer: FunctionComponent<ProgressContainerProps> = ({
  radius,
  stroke,
  color,
  percent,
  animate = false,
}) => {
  const [percentView, setPercentView] = useState(0);

  useEffect(() => {
    if (animate) {
      setPercentView(percent);
    } else {
      setPercentView(0);
    }
  }, [animate]);

  return (
    <>
      <Progress
        radius={radius}
        stroke={stroke}
        color={color}
        percent={percentView}
      />
    </>
  );
};

export default ProgressContainer;
