import React from 'react';
import { EditionLinkContainer, EditionLinkLabel } from './styles';
import { DefaultIcon } from 'components';

interface IEditionLinKProps {
  label: string;
  to: string;
};

const EditionLink: React.FC<IEditionLinKProps> = ({
  label,
  to
}: IEditionLinKProps) => {
  return (
    <EditionLinkContainer>
      <EditionLinkLabel size={13}>{label}</EditionLinkLabel>
      <DefaultIcon color="gray1" iconFamily="FontAwesome5" name="angle-right" size={24} />
    </EditionLinkContainer>
  );
};

export default EditionLink;
