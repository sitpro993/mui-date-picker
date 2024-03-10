import React, { FC } from 'react';
import SMCDatePicker from '../SMCDatePicker';

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
      <SMCDatePicker />
    </div>
  );
};

export default Example;
