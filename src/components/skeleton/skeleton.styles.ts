import { keyframes, styled } from 'styled-components';

import { Box, convertToRem } from '../../config/theme';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }`;

export const SkeletonStyles = styled(Box)<{ height?: number; width?: number }>`
  background: linear-gradient(90deg, #d1d5db 25%, #e5e7eb 50%, #d1d5db 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${convertToRem(8)};

  width: 100%;
  height: ${({ height = 20 }) => convertToRem(height)};
  max-width: ${({ width = 120 }) => convertToRem(width)};
`;
