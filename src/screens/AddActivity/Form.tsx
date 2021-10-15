import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Spacing from 'components/Spacing';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native';
import { Input } from 'components';
import {
  ButtonForm,
  FormContainer,
  MultilineInputContainer,
  SeparatorTime,
  SingleInputContainer,
  TimeContainer,
  TimeText,
} from './styles';
import { IAddActivityFormProps, IFormValuesAddActivity } from './types';

const format = require('date-fns/format');
const sub = require('date-fns/sub');

const AddActivityForm: React.FC<IAddActivityFormProps> = ({
  item,
  onSubmit,
}: IAddActivityFormProps) => {
  const { control, handleSubmit, setValue } = useForm({ mode: 'onBlur' });

  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [startTime, setStartTime] = useState(new Date(2020, 1, 1, 11));
  const [endTime, setEndTime] = useState(new Date(2020, 1, 1, 12));
  const [option, setOption] = useState('');
  const [timePicker, setTimePicker] = useState(new Date());

  const onSubmitForm = useCallback(
    (data: IFormValuesAddActivity) => {
      onSubmit(data);
    },
    [onSubmit],
  );

  const showTimePicker = (selected: string) => {
    setTimePickerVisible(true);
    if (selected === 'start') {
      setOption('start');
      setTimePicker(startTime);
    } else {
      setOption('end');
      setTimePicker(endTime);
    }
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirm = (date) => {
    sub(date, { hours: 5 });

    if (option === 'start') {
      setValue('startTime', format(date, 'HH:mm'));
      setStartTime(date);
    } else {
      setValue('endTime', format(date, 'HH:mm'));
      setEndTime(date);
    }

    hideTimePicker();
  };

  return (
    <>
      <FormContainer>
        <SingleInputContainer>
          <Controller
            control={control}
            defaultValue={item?.name ?? ''}
            name="title"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Title"
                value={value}
                onChangeText={(newText) => onChange(newText)}
              />
            )}
          />
        </SingleInputContainer>
        <SingleInputContainer>
          <Controller
            control={control}
            defaultValue={item?.ubication ?? ''}
            name="ubication"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Ubication"
                value={value}
                onChangeText={(newText) => onChange(newText)}
              />
            )}
          />
        </SingleInputContainer>
        <MultilineInputContainer>
          <Controller
            control={control}
            defaultValue={item?.description ?? ''}
            name="description"
            render={({ field: { onChange, value } }) => (
              <Input
                multiline
                placeholder="Description"
                value={value}
                onChangeText={(newText) => onChange(newText)}
              />
            )}
          />
        </MultilineInputContainer>
        <TimeContainer>
          <TimeText>Start</TimeText>
          <Controller
            control={control}
            defaultValue={format(startTime, 'HH:mm')}
            name="startTime"
            render={({ field }) => (
              <TouchableOpacity onPress={() => showTimePicker('start')}>
                <TimeText isTime>{field.value}</TimeText>
              </TouchableOpacity>
            )}
          />
        </TimeContainer>
        <SeparatorTime>_ _ _ _ _ _ _ _ _ _ _</SeparatorTime>
        <TimeContainer>
          <TimeText>End</TimeText>
          <Controller
            control={control}
            defaultValue={format(endTime, 'HH:mm')}
            name="endTime"
            render={({ field }) => (
              <TouchableOpacity onPress={() => showTimePicker('end')}>
                <TimeText isTime>{field.value}</TimeText>
              </TouchableOpacity>
            )}
          />
        </TimeContainer>
        <Spacing size={40} />
        <ButtonForm onPress={handleSubmit(onSubmitForm)}>Add Activity</ButtonForm>
      </FormContainer>
      <DateTimePickerModal
        date={timePicker}
        isVisible={isTimePickerVisible}
        locale="en-GB"
        mode="time"
        onCancel={hideTimePicker}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default AddActivityForm;
