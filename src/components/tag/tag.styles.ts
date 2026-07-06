import { css, styled } from 'styled-components';

import { Box, theme } from '../../config/theme';

export type Sizes = keyof typeof sizes;

const sizes = {
  small: css`
    padding: ${theme.padding.es};
    font-size: ${theme.fontSize.tag};
    gap: ${theme.margin.s};
  `,
  medium: css`
    padding: ${theme.padding.es} ${theme.padding.m};
    font-size: ${theme.fontSize.tag};
    gap: ${theme.margin.s};
  `,
  large: css`
    padding: ${theme.padding.es} ${theme.padding.m};
    font-size: ${theme.fontSize.tag};
    gap: ${theme.margin.s};
  `,
};

export const TagStyles = styled(Box)<{ size?: Sizes }>`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.m};
  text-transform: uppercase;
  color: ${theme.colors.text};
  align-items: center;

  ${({ size = 'medium' }: { size: Sizes }) => size && sizes[size]}
`;
