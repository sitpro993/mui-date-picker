import React, { FC } from 'react';
import SMRangePicker from '../SMRangePicker';

const Example: FC<any> = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <SMRangePicker />
    </div>
  );
};

export default Example;
