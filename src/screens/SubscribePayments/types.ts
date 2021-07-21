export interface IFormValuesSubscribePayments {
  name: string;
}

export interface ICardDetails {
  brand?: string;
  complete?: boolean;
  expiryMonth?: number;
  expiryYear?: number;
  last4?: string;
}

export interface ISubscribePaymentsFormProps {
  onPressSubcribe: (data: IFormValuesSubscribePayments, card: ICardDetails) => void;
}
