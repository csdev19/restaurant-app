import React, { FunctionComponent } from 'react';
import { TrophyProps } from '@atoms/Trophy/Trophy.types';

const Trophy: FunctionComponent<TrophyProps> = ({ row, col }) => {
  const basePath = 'https://github.com/csdev19';
  const src = `https://github-profile-trophy.vercel.app/?username=csdev19&row=${row}&column=${col}`;
  return (
    <>
      <a href={basePath}>
        <img className="w-full" src={src} alt="csdev19" />
      </a>
    </>
  );
};

export default Trophy;
