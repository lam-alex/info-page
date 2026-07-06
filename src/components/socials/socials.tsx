import { FC, memo, ReactElement, useCallback } from 'react';
import { Discord, Github, LinkedIn, Telegram } from '../../assets/icons';

import { SocialItemStyles, SocialsStyles } from './socials.styles';

const socialList = ['linkedin', 'telegram', 'discord', 'github'] as const;

export type SocialList = (typeof socialList)[number];

export type SocialItem = {
  name: SocialList;
  link: string;
};

export type SocialsProps = {
  items: SocialItem[];
};

export const Socials: FC<SocialsProps> = memo(({ items }) => {
  const icons: Record<SocialList, ReactElement> = {
    discord: <Discord />,
    github: <Github />,
    linkedin: <LinkedIn />,
    telegram: <Telegram />,
  };

  const handlerClick = useCallback((link: string) => window.open(link), []);

  return (
    <SocialsStyles>
      {items.map(({ name, link }, index) => (
        <SocialItemStyles key={`social-item-${name}-${index}`} onClick={() => handlerClick(link)}>
          {icons[name]}
        </SocialItemStyles>
      ))}
    </SocialsStyles>
  );
});
