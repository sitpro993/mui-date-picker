import React from 'react';
import { SMDatePicker } from '../SMDatePicker';
import { Moment } from 'moment';
import { PickerRef, RangePickerProps } from 'rc-picker';
import en from '../../locale/en_US';
import { PickerLocale } from 'antd/lib/date-picker/generatePicker';

export interface SMRangePickerProps
  extends Omit<
    RangePickerProps<Moment>,
    'placement' | 'locale' | 'generateConfig'
  > {
  locale?: PickerLocale;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
}

const SMRangePicker = React.forwardRef<PickerRef, SMRangePickerProps>(
  (props, ref) => {
    const { locale, prefixCls, ...restProps } = props;
    return (
      <SMDatePicker.RangePicker
        locale={locale || en}
        prefixCls={prefixCls || 'sm'}
        {...restProps}
        ref={ref}
      />
    );
  }
);
SMRangePicker.displayName = 'RangePicker';

export default SMRangePicker;
