import { FC, memo } from 'react';

import { theme } from '../../../config/theme';
import { IconProps, Mask } from '../icon';

import discord from './discord.svg';

export type DiscordProps = IconProps & {};

export const Discord: FC<DiscordProps> = memo(({ color = theme.colors.iconPrimary, size, ...rest }) => (
  <Mask $color={color} $size={size} $url={discord} {...rest} />
));
