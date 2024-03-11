import React, { FC } from 'react';
import SMDatePicker from '../SMDatePicker';

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
      <SMDatePicker />
    </div>
  );
};

export default Example;
