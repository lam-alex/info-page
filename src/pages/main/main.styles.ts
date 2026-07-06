import { styled } from 'styled-components';

import { Box } from '../../components';
import { convertToRem, media } from '../../config/theme';

export const Section = styled(Box)`
  flex-direction: column;
  gap: ${convertToRem(54)};
  max-width: ${convertToRem(1080)};
  width: 100%;
  padding: ${convertToRem(90)} 0;

  @media (min-width: ${media.md}) {
    padding: ${convertToRem(180)} 0;
  }
`;

export const LeftSideWrapper = styled(Box)`
  @media (min-width: ${media.md}) {
    margin-bottom: auto;
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
  }
`;
