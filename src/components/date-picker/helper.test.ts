import { DatePickerHelper } from './helper';
import { getBeginWeekOfDate } from '../../helpers/Date/operation';
test('format str', () => {
    expect(DatePickerHelper.getDateByStr('2016/02/03').getMonth()).toBe(1);
    expect(DatePickerHelper.getStrByDate(new Date('2018/02/03'))).toBe('2018/02/03');
    expect(DatePickerHelper.getAllDaysOfMonth(3,2018)).toBe(31);
    expect(DatePickerHelper.getBeginWeekByMonth(3,2018)).toBe(4);
    expect(DatePickerHelper.getBeginWeekByMonth(6,2018)).toBe(5);    
    expect(DatePickerHelper.getEndWeekByMonth(6,2018)).toBe(6);    
})