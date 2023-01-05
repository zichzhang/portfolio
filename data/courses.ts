import { Course } from '@/types/course';

const courses: Course[] = [
  /* Adding New Course Checklist:
   * - Create new form on convertkit.com
   * - Obtain formId
   * - Write title & description
   * - No URL
   * - live: false
   * - progress: 0
   */
  {
    id: 'polygon-faucet',
    title: 'Polygon Faucet',
    url: 'https://maticfaucet.xyz/',
    description:
      'I implemented a cryptocurrency faucet that sends $MATIC tokens to existing ethereum addresses. This faucet helps new users on the Polygon blockchain pay for their first transaction fee (gas fee). This faucet requires authentication with Google OAuth, and has a 1-minute timeout after each requests to prevent users from botting the faucet.',
    live: true,
    image: '/assets/images/faucet.png',
  },
  {
    id: 'inspire-ai',
    title: 'Inspire.ai',
    url: 'https://devpost.com/software/inspire-ai',
    description:
      'Inspire.ai is a hackathon project that provides creative UI solutions powered by AI and curated by an open community. This social network application allows users to generate frontend designs using OpenAI and to select their favorite outputs. Selected outputs are shared in a public pool of frontend designs separated by category (website, dashboard, etc.) where everyone can vote for their favorite AI-generated UI outputs!',
    live: true,
    image: '/assets/images/openAI.png',
  },
  {
    id: 'ethereum-address-tracker',
    title: 'Ethereum Address Tracker for NFTs',
    url: 'https://pro.ipv4.ovh/mcgill/sd-nft',
    description:
      "I implemented a software that tracks and notifies a user by phone or by email (via Twilio and SendGrid API) of all NFTs transacted at a specified ethereum address. This tracker can be used for tax purposes by tracking your own NFT transactions, or it can be used for investment purposes if a user wants to follow another investor's NFT trades.",
    live: true,
    image: '/assets/images/eth.png',
  },
  {
    id: 'majiq-wheel',
    title: 'MAJIQ Wheel',
    url: 'https://chrome.google.com/webstore/detail/majiq-wheel/ppooppbgpecgjkajonpfapehnebehaba',
    description:
      "I implemented a chrome extension of a multipurpose picker wheel to help users decide between random choices conveniently, without opening a new tab.",
    live: true,
    image: '/assets/images/MAJIQ.jpeg',
  },
];

export default courses;
