import { styled } from 'styled-components';

import { convertToRem } from '../../config/theme';

export type MaskProps = { $url: string; $size?: string; $color?: string };
export type IconProps = { size?: string; color?: string };

export const Mask = styled.div<MaskProps>`
  background-color: ${({ $color }) => $color};
  transition: background-color 300ms;

  width: ${({ $size = 20 }) => convertToRem($size)};
  height: ${({ $size = 20 }) => convertToRem($size)};

  mask: url(${({ $url }) => $url});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
`;
