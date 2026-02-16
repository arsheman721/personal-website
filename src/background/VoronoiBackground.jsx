import React from 'react';
import { GrainGradient } from '@paper-design/shaders-react';

const GrainGradientBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden'
      }}
    >
      <GrainGradient
        width="100%"
        height="100%"
        colors={["#3e6274", "#a49c74", "#568b50"]}
        colorBack="#0e0d16"
        softness={0}
        intensity={0.5}
        noise={0.5}
        shape="blob"
        speed={1}
        scale={0.5}
        rotation={0}
        offsetX={0}
        offsetY={0}
        fit="cover"
      />
    </div>
  );
};

export default GrainGradientBackground;
