import React from 'react';
import { useLottie } from 'lottie-react';

const LottieAnimation = ({ path, loop = true, autoplay = true, style }) => {
  const options = {
    path: path,
    loop,
    autoplay
  };

  const { View } = useLottie(options);

  return <div style={style}>{View}</div>;
};

export default LottieAnimation;