import React, { ReactElement } from 'react';
import { Snackbar } from 'react-native-paper';

interface IToastProps {
  toast: {
    label: string;
    message: string;
    visible: boolean;
  };
}

const Toast: React.FC<IToastProps> = ({ toast }: IToastProps): ReactElement => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (toast.visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [toast]);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
      action={{
        label: toast.label,
        onPress: () => onDismissSnackBar(),
      }}
      visible={visible}
      onDismiss={() => onDismissSnackBar()}
    >
      {toast.message}
    </Snackbar>
  );
};

export default Toast;
