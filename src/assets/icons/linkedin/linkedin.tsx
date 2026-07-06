import { FC, memo } from 'react';

import { theme } from '../../../config/theme';
import { IconProps, Mask } from '../icon';

import linkedin from './linkedin.svg';

export type LinkedInProps = IconProps & {};

export const LinkedIn: FC<LinkedInProps> = memo(({ color = theme.colors.iconPrimary, size, ...rest }) => (
  <Mask $color={color} $size={size} $url={linkedin} {...rest} />
));
