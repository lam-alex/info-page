import { styled } from 'styled-components';
import { theme } from '../../config/theme';

export type ProfileCardStylesProps = {
  borderColor?: string;
};

export const ProfileCardStyles = styled.div<ProfileCardStylesProps>`
  display: flex;
  flex-direction: column;
  padding: ${theme.padding.m};
  border: 1px solid ${({ borderColor }) => borderColor ?? theme.colors.border};
  border-radius: ${theme.radius.m};
  gap: ${theme.padding.m};
`;
