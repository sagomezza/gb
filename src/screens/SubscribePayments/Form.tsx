import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import Spacing from 'components/Spacing';
import { CardField } from '@stripe/stripe-react-native';
import {
  ButtonSubscribe,
  CardContainer,
  FormContainer,
  InputSubscribePayments,
  styles,
} from './styles';
import { IFormValuesSubscribePayments, ISubscribePaymentsFormProps } from './types';

const SubscribePaymentsForm: React.FC<ISubscribePaymentsFormProps> = ({
  onPressSubcribe,
}: ISubscribePaymentsFormProps) => {
  const [card, setCard] = useState({});

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = useCallback(
    (data: IFormValuesSubscribePayments) => {
      onPressSubcribe(data, card);
    },
    [card, onPressSubcribe],
  );

  return (
    <FormContainer>
      <View>
        <InputSubscribePayments
          control={control}
          error={errors.name}
          errorText={errors.name?.message}
          keyboardType="default"
          name="name"
          placeholder="Name"
          rules={{
            required: {
              value: true,
              message: 'Name is required',
            },
          }}
        />
        <Spacing size={26} />
        <CardContainer>
          <CardField
            cardStyle={styles.cardStyle}
            placeholder={{
              number: 'Card Number',
            }}
            postalCodeEnabled={false}
            style={styles.style}
            onCardChange={(cardDetails) => setCard(cardDetails)}
          />
        </CardContainer>
      </View>
      <ButtonSubscribe onPress={handleSubmit(onSubmit)}>Subscribe</ButtonSubscribe>
    </FormContainer>
  );
};

export default SubscribePaymentsForm;
