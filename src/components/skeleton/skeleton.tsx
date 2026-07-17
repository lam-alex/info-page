import { FC } from 'react';
import { BoxProps } from '../../config/theme';

import { SkeletonStyles } from './skeleton.styles';

export type SkeletonProps = BoxProps & {
  width?: number;
  height?: number;
};

export const Skeleton: FC<SkeletonProps> = ({ ...rest }) => <SkeletonStyles {...rest} />;
