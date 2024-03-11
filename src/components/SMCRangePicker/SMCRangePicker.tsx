import React from 'react';
import { SMCDatePicker } from '../SMCDatePicker';
import { Moment } from 'moment';
import { PickerRef, RangePickerProps } from 'rc-picker';
import en from '../../locale/en_US';
import { PickerLocale } from 'antd/lib/date-picker/generatePicker';

export interface SMCRangePickerProps
  extends Omit<
    RangePickerProps<Moment>,
    'placement' | 'locale' | 'generateConfig'
  > {
  locale?: PickerLocale;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
}

const { RangePicker } = SMCDatePicker;

const SMCRangePicker = React.forwardRef<PickerRef, SMCRangePickerProps>(
  (props, ref) => {
    const { locale, prefixCls, ...restProps } = props;
    return (
      <RangePicker
        locale={locale || en}
        prefixCls={prefixCls || 'smc'}
        {...restProps}
        ref={ref}
      />
    );
  }
);
SMCRangePicker.displayName = 'RangePicker';

export default SMCRangePicker;
