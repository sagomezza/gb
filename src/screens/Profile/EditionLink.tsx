import React from "react";
import { DefaultIcon } from "components";
import { EditionLinkContainer, EditionLinkLabel } from "./styles";

interface IEditionLinKProps {
  label: string;
}

const EditionLink: React.FC<IEditionLinKProps> = ({
  label,
}: IEditionLinKProps) => (
  <EditionLinkContainer>
    <EditionLinkLabel size={13}>{label}</EditionLinkLabel>
    <DefaultIcon
      color="gray1"
      iconFamily="FontAwesome5"
      name="angle-right"
      size={24}
    />
  </EditionLinkContainer>
);

export default EditionLink;
