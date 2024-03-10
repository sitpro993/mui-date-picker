import React, { FC } from 'react';
import SMCRangPicker from '../SMCRangePicker';

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
      <SMCRangPicker />
    </div>
  );
};

export default Example;
