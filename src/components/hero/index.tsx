import {
  Stack,
  VStack,
  Heading,
  Text,
  UnorderedList,
  Button,
  Icon,
  Link,
  ListItem,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

import {
  GITHUB_PROFILE,
  YOUTUBE_CHANNEL,
  TWITTER_PROFILE,
  LINKEDIN_PROFILE,
  RESUME
} from 'src/constants';
import { Link as LinkType } from '@/types/link';
import ExternalLink from '../external-link';
import HeroImage from '../hero-image';
import HeroPlay from '../hero-play';

type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: RESUME,
    label: 'Resume',
    color: '',
  },
  {
    href: LINKEDIN_PROFILE,
    label: 'LinkedIn',
    color: '#0077b5 ',
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
  },
  {
    href: YOUTUBE_CHANNEL,
    label: 'YouTube',
    color: 'red.500',
  },
];

const Hero = () => {
  return (
    <Stack
      as='section'
      alignItems='center'
      direction={{ base: 'column-reverse', md: 'row' }}
      w='full'
      spacing={12}
    >
      <VStack alignItems='flex-start' w='full' spacing={3}>
        <Stack
          alignItems='center'
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w='full'
          spacing={3}
        >
          <Heading as='h1' size='lg'>
            Zi Chao Zhang
          </Heading>
          <HeroPlay />
        </Stack>
        <UnorderedList alignItems='flex-start' w='full' spacing={3}>
          <ListItem>I am a software engineering student at McGill University.</ListItem>
          <ListItem>I specialize in full-stack web development, and have an interest in blockchain development and cryptography.</ListItem>
          <ListItem>Currently, interning at <ExternalLink href='https://www.coveo.com/en'>Coveo</ExternalLink> as a software developer. Previously, interned at <ExternalLink href='https://www.bettersleep.com/'>BetterSleep</ExternalLink> as a software developer and at <ExternalLink href='https://www.cae.com/'>CAE</ExternalLink> as a data engineer.</ListItem>
        </UnorderedList>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target='_blank'
              variant='ghost'
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
