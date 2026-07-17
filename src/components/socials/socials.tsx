import { memo, ReactElement, useCallback } from 'react';
import { Discord, Github, LinkedIn, Telegram } from '../../assets/icons';
import { Skeleton } from '../skeleton';

import { SocialItemStyles, SocialsStyles } from './socials.styles';

const socialList = ['linkedin', 'telegram', 'discord', 'github'] as const;

export const isSocialList = (s: string): s is SocialList => Array.from(socialList as readonly string[]).includes(s);

export type SocialList = (typeof socialList)[number];

export type SocialItem = {
  name: SocialList;
  link: string;
};

export interface SocialsProps<T> {
  items: T[] | null;
}

export const Socials = memo(<T extends { name: string; link: string }>({ items }: SocialsProps<T>) => {
  const icons: Record<SocialList, ReactElement> = {
    discord: <Discord />,
    github: <Github />,
    linkedin: <LinkedIn />,
    telegram: <Telegram />,
  };

  const handlerClick = useCallback((link: string) => window.open(link), []);

  return (
    <SocialsStyles>
      {items?.map(({ name, link }, index) => (
        <SocialItemStyles key={`social-item-${name}-${index}`} onClick={() => handlerClick(link)}>
          {isSocialList(name) && icons[name]}
        </SocialItemStyles>
      )) ?? (
        <>
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
        </>
      )}
    </SocialsStyles>
  );
});
