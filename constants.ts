
import type { AdFormat } from './types';
import { BillboardIcon } from './components/icons/BillboardIcon';
import { MagazineIcon } from './components/icons/MagazineIcon';
import { BusStopIcon } from './components/icons/BusStopIcon';
import { SubwayIcon } from './components/icons/SubwayIcon';
import { NewspaperIcon } from './components/icons/NewspaperIcon';
import { SocialIcon } from './components/icons/SocialIcon';
import { CoffeeShopIcon } from './components/icons/CoffeeShopIcon';
import { BusIcon } from './components/icons/BusIcon';
import { AirplaneIcon } from './components/icons/AirplaneIcon';
import { CinemaIcon } from './components/icons/CinemaIcon';

export const AD_FORMATS: AdFormat[] = [
  {
    id: 'billboard',
    name: 'Times Square Billboard',
    prompt: 'Seamlessly place this product image onto a massive, glowing digital billboard in Times Square at night. The ad should look realistic, with appropriate lighting and reflections from the city lights.',
    icon: BillboardIcon,
  },
  {
    id: 'magazine',
    name: 'Luxury Magazine',
    prompt: 'Integrate this product image into a full-page, high-fashion magazine advertisement. The layout should be clean and luxurious, with elegant typography for a fictional brand name and a short tagline.',
    icon: MagazineIcon,
  },
  {
    id: 'bus_stop',
    name: 'Bus Stop Ad',
    prompt: 'Place this product image onto an advertisement panel within a modern glass and steel bus stop shelter on a sunny city street. Include realistic reflections on the glass.',
    icon: BusStopIcon,
  },
  {
    id: 'subway',
    name: 'Subway Car Ad',
    prompt: 'Realistically place this product image onto an advertising card inside a brightly lit, modern subway car. Show other ads and the interior of the car for context and realism.',
    icon: SubwayIcon,
  },
  {
    id: 'newspaper',
    name: 'Newspaper Ad',
    prompt: 'Create a classic black and white newspaper advertisement featuring this product image. The ad should have a vintage, slightly grainy feel, complete with a bold headline and some body text.',
    icon: NewspaperIcon,
  },
  {
    id: 'social_media',
    name: 'Influencer Post',
    prompt: 'Show this product being featured in a social media post on a smartphone screen. The phone is being held by a person. The post should have a caption praising the product and engagement icons (likes, comments).',
    icon: SocialIcon,
  },
  {
    id: 'coffee_shop',
    name: 'Coffee Shop Ad',
    prompt: 'Place this product image on a small, elegant tabletop ad stand inside a cozy, well-lit coffee shop. A cup of coffee and a pastry should be visible on the blurred background table.',
    icon: CoffeeShopIcon,
  },
  {
    id: 'city_bus',
    name: 'Side of City Bus',
    prompt: 'Create a large, vibrant advertisement on the side of a city bus using this product image. The bus should be driving down a bustling city street during the day, showing motion blur.',
    icon: BusIcon,
  },
  {
    id: 'inflight_magazine',
    name: 'In-flight Magazine',
    prompt: 'Feature this product image in an open in-flight magazine, placed on an airplane tray table next to a window with clouds visible outside. The lighting should be soft and natural.',
    icon: AirplaneIcon,
  },
  {
    id: 'cinema',
    name: 'Cinema Screen Ad',
    prompt: 'Display this product image as a pre-show advertisement on a giant, glowing cinema screen in a dark movie theater. The silhouettes of the audience in the seats in the foreground should be slightly visible.',
    icon: CinemaIcon,
  },
];
