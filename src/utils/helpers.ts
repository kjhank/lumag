import * as iconComponents from '@/static';
import { IconSlug } from '@/types';

export const isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${day}/${month}/${year}`;
};

export const getIcon = (slug: IconSlug) => {
  const icons: { [key in IconSlug]: string } = {
    agency: iconComponents.Agency,
    arrowDown: iconComponents.ArrowDown,
    arrowRight: iconComponents.ArrowRight,
    checkFalse: iconComponents.CheckFalse,
    checkTrue: iconComponents.CheckTrue,
    chip: iconComponents.Chip,
    circleCheck: iconComponents.CircleCheck,
    circleCutout: iconComponents.CircleCutout,
    circleIcon: iconComponents.CircleIcon,
    circles: iconComponents.Circles,
    clockIcon: iconComponents.ClockIcon,
    cogTank: iconComponents.CogTank,
    facebook: iconComponents.Facebook,
    globePeople: iconComponents.GlobePeople,
    lightbulb: iconComponents.Lightbulb,
    linkedin: iconComponents.Linkedin,
    logo: iconComponents.Logo,
    mapPin: iconComponents.MapPin,
    medal: iconComponents.Medal,
    menu: iconComponents.Menu,
    pin: iconComponents.Pin,
    play: iconComponents.Play,
    productLogo: iconComponents.ProductLogo,
    scale: iconComponents.Scale,
    shieldTick: iconComponents.ShieldTick,
    spyglass: iconComponents.Spyglass,
    twitter: iconComponents.Twitter,
    youtube: iconComponents.Youtube,
    zoom: iconComponents.Zoom,
  };

  return icons[slug];
};
