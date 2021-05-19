import * as React from "react";
import { ModalInfo as ModalInfoStyled } from "./styles";
import Typography from "../Typography";

const ModalInfo = ({ text }: { text: string }) => (
  <ModalInfoStyled>
    <Typography
      color="white"
      marginStart={16}
      size={16}
      textAlign="left"
      variant="regular"
    >
      {text}
    </Typography>
  </ModalInfoStyled>
);

export default ModalInfo;
