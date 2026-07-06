import { FC, memo, PropsWithChildren } from 'react';

import { ProfileCardStyles } from './profile-card.styles';

export type ProfileCardProps = PropsWithChildren<{}>;

export const ProfileCard: FC<ProfileCardProps> = memo(({ ...rest }) => <ProfileCardStyles {...rest} />);
