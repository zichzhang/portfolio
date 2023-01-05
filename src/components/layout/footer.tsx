import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { chakra, Stack, VStack, Divider, Link, Text } from '@chakra-ui/react';

import {
  TWITTER_PROFILE,
  GITHUB_PROFILE,
  YOUTUBE_CHANNEL,
} from '../../constants';
import { Link as LinkType } from '@/types/link';
import VercelCallout from '../vercel-callout';

const firstGroup: LinkType[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/colophon',
    label: 'Colophon',
  },
];

const secondGroup = [
  {
    href: TWITTER_PROFILE,
    label: 'Twitter',
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
  },
];

const thirdGroup = [
  {
    href: '/uses',
    label: 'Uses',
  },
  {
    href: '/gear',
    label: 'Gear',
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
  },
  {
    href: '/books',
    label: 'Books',
  },
];

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack as='footer' alignItems='flex-start' pb={8} spacing={8}>
      <Divider />
      <Stack
        alignItems='center'
        justifyContent={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        gridRowGap={4}
        w='full'
        spacing={0}
      >
        <Text color='gray.500' fontSize='sm'>
          ©{' '}
          <chakra.span as='time' color='purple.500'>
            {new Date().getFullYear()}
          </chakra.span>{' '}
          Zi Chao Zhang
        </Text>
        <VercelCallout />
      </Stack>
    </VStack>
  );
};

export default Footer;
