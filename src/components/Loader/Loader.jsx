import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Styled';

function Loader() {
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderBox>
  );
}

export default Loader;