import styled from "styled-components/native";
import { ActivityIndicator } from "components";

export { default as Input } from "components/FormInput/NativeOptional";

export const Activity = styled(ActivityIndicator)`
  color: ${({ theme }) => theme.colors.primary};
`;
