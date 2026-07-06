import { CSSProperties, styled } from 'styled-components';

import { Box, convertToRem, theme } from '../../config/theme';

export const TimelineStyles = styled(Box)<{ $customStyles?: CSSProperties }>`
  flex-direction: column;

  ${(props) => props.$customStyles};
`;

export const TimelineItemStyles = styled(Box)`
  position: relative;
  padding-left: ${convertToRem(74)};
  padding-bottom: ${convertToRem(74)};
  flex-direction: column;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
  }

  &:hover::before {
    background-color: ${theme.colors.primary};
  }

  [data-hover] {
    transition: color 0.2s ease-out;
  }

  &:hover [data-hover] {
    color: ${theme.colors.primary};
  }

  &::before {
    width: ${convertToRem(12)};
    height: ${convertToRem(12)};
    border-radius: 50%;
    background-color: ${theme.colors.text};
    transition: background-color 0.2s ease-out;
    z-index: 1;
  }

  &::after {
    height: 100%;
    border-left: ${convertToRem(1)} solid ${theme.colors.border};
    z-index: 0;
    left: ${convertToRem(6)};
  }
`;
