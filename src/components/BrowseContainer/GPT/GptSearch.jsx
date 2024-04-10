import React from 'react';
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../../../Utils/Constants';

export const GptSearch = () => {
  return (
    <div className="relative w-full">
      <img
        src={BG_URL}
        className="w-full h-auto"
        alt="Background"
      />
      <div className="absolute inset-28">
        <GptSearchBar />
      </div>
    </div>
  );
};
