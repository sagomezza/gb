import * as React from 'react';
import { _ModalInfo } from './styles';
import Typography from '../Typography';

const ModalInfo = ({ text }: { text: string }) => {
  return (
    <_ModalInfo>
      <Typography marginStart={16} textAlign="left" color="white" size={16} variant="regular">
        {text}
      </Typography>
    </_ModalInfo>
  );
};

ModalInfo.defaultProps = {
  text: '',
};

export default ModalInfo;
