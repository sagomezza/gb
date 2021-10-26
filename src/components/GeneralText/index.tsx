import * as React from 'react';

import { StyledSubheading, Terms, TermsContent, TermsFooter, TermsContentText } from './style';

type GeneralTextProps = {
  content: string;
  title: string;
  version?: string;
};

export const GeneralText: React.FC<GeneralTextProps> = ({
  content,
  title,
  version,
}: GeneralTextProps) => (
  <Terms>
    <StyledSubheading>{title}</StyledSubheading>
    <TermsContent>
      <TermsContentText>{content}</TermsContentText>
    </TermsContent>
    <TermsFooter>
      <StyledSubheading>Software Version</StyledSubheading>
      <TermsContentText>v {version}</TermsContentText>
    </TermsFooter>
  </Terms>
);

GeneralText.defaultProps = {
  version: '1.0002',
};
