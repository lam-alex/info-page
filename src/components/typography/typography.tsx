import { FC, memo, PropsWithChildren } from 'react';
import { css } from 'styled-components';

import { BoxProps, typography } from '../../config/theme';
import { TypographyStyles } from './typography.styles';

type Styles = keyof typeof typography;

export type TypographyProps = PropsWithChildren<BoxProps & { styles?: Styles }>;

export const Typography: FC<TypographyProps> = memo(({ customStyles, modifiers, styles, ...rest }) => (
  <TypographyStyles
    modifiers={css`
      ${styles && typography[styles]};
      ${modifiers};
    `}
    customStyles={{ ...customStyles }}
    {...rest}
  />
));
