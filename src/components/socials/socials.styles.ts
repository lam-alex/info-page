import { styled } from 'styled-components';

import { Box, convertToRem, theme } from '../../config/theme';

export const SocialsStyles = styled(Box)`
  gap: ${convertToRem(8)};
  justify-content: center;
`;

export const SocialItemStyles = styled(Box)`
  border: ${convertToRem(2)} solid ${theme.colors.border};
  border-radius: 50%;
  padding: ${convertToRem(10)};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 300ms;

  &:hover {
    border-color: ${theme.colors.primary};

    & > * {
      background-color: ${theme.colors.primary};
    }
  }
`;
