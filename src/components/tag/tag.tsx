import { FC, memo, PropsWithChildren } from 'react';

import { TagStyles, Sizes } from './tag.styles';

export type TagProps = PropsWithChildren<{ size?: Sizes }>;

export const Tag: FC<TagProps> = memo(({ ...rest }) => <TagStyles {...rest} />);
