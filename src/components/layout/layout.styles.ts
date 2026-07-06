import { styled } from 'styled-components';

import { Box, convertToRem, media, theme } from '../../config/theme';

export const LayoutStyles = styled(Box)`
  flex-wrap: wrap;

  @media (min-width: ${media.md}) {
    flex-wrap: nowrap;
  }
`;

export const LayoutLeftSide = styled(Box)`
  flex: 0 0 ${convertToRem(360)};
  padding: ${theme.padding.s};
  justify-content: right;
  display: none;

  @media(min-width: ${media.md}) {
    display: flex;
  }
`;

export const LayoutMiddleSide = styled(Box)`
  flex: 1 2 auto;
  flex-flow: column wrap;
  padding: 0 ${theme.padding.m};
  justify-content: center;
  align-items: center;
`;

export const LayoutRightSide = styled(Box)``;
