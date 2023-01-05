import { IconType } from 'react-icons/lib';
import { SiTwitter, SiGithub, SiYoutube, SiPolywork } from 'react-icons/si';
import { IoMoon } from 'react-icons/io5';

import {
  GITHUB_PROFILE,
  TWITTER_PROFILE,
  YOUTUBE_CHANNEL,
} from 'src/constants';

type BaseItem = {
  title: string;
};

export type PageItem = BaseItem & {
  href: string;
};

export type SocialItem = BaseItem & {
  href: string;
  icon: IconType;
};

export type ThemeItem = BaseItem & {
  id: 'theme';
  icon: IconType;
};

export type SearchItemsType = {
  pages: PageItem[];
  social: SocialItem[];
  theme: ThemeItem[];
};

export const searchItems: SearchItemsType = {
  pages: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Uses',
      href: '/uses',
    },
    {
      title: 'Gear',
      href: '/gear',
    },
  ],
  social: [
    {
      title: 'Twitter',
      icon: SiTwitter,
      href: TWITTER_PROFILE,
    },
    {
      title: 'GitHub',
      icon: SiGithub,
      href: GITHUB_PROFILE,
    },
    {
      title: 'YouTube',
      icon: SiYoutube,
      href: YOUTUBE_CHANNEL,
    }
  ],
  theme: [
    {
      id: 'theme',
      title: 'Change theme',
      icon: IoMoon,
    },
  ],
};
