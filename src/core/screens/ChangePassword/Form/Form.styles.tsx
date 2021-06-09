import styled from "styled-components/native";
import { ActivityIndicator } from "core/components";

export { default as Input } from "core/components/FormInput/NativeOptional";

export const Activity = styled(ActivityIndicator)`
  color: ${({ theme }) => theme.colors.primary};
`;
