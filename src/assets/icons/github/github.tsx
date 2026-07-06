import { FC, memo } from 'react';

import { theme } from '../../../config/theme';
import { IconProps, Mask } from '../icon';

import github from './github.svg';

export type GithubProps = IconProps & {};

export const Github: FC<GithubProps> = memo(({ color = theme.colors.iconPrimary, size, ...rest }) => (
  <Mask $color={color} $size={size} $url={github} {...rest} />
));
