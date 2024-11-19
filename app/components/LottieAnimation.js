import React from 'react';
import { useLottie } from 'lottie-react';

const LottieAnimation = ({ path, loop = true, autoplay = true, className }) => {
  const options = {
    path: path,
    loop,
    autoplay
  };

  const { View } = useLottie(options);

  return (
    <div className={className}>
      {View}
    </div>
  );
};

export default LottieAnimation;
