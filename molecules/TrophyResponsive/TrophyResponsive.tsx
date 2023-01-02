import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import Trophy from '@atoms/Trophy/Trophy';
import useWindowSize from '@shared/hooks/useWindowSize';
import { ROW_COL_PER_SIZE } from '@molecules/TrophyResponsive/TrophyResponsive.constants';

const TrophyResponsive: VoidFunctionComponent = () => {
  const [size, widthStates] = useWindowSize();
  const [rowAndCol, setRowAndCol] = useState({ row: 2, col: 4 });

  useEffect(() => {
    setRowAndCol(ROW_COL_PER_SIZE[widthStates]);
  }, [size, widthStates]);

  return (
    <>
      <Trophy row={rowAndCol.row} col={rowAndCol.col} />
    </>
  );
};

export default TrophyResponsive;
