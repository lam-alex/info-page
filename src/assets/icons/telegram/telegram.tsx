import { FC, memo } from 'react';

import { theme } from '../../../config/theme';
import { IconProps, Mask } from '../icon';

import telegram from './telegram.svg';

export type TelegramProps = IconProps & {};

export const Telegram: FC<TelegramProps> = memo(({ color = theme.colors.iconPrimary, size, ...rest }) => (
  <Mask $color={color} $size={size} $url={telegram} {...rest} />
));
