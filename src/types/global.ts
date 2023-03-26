export type RequestParams = string |
string[][] |
Record<string, string> |
URLSearchParams |
undefined;

export type WebFontProperies = {
  family: string;
  fontDisplay: 'swap';
  fontStyle: 'normal' | 'italic';
  fontWeight: number | 'bold' | 'light';
  src: string;
};

export type IconSlug = 'agency' |
'arrowDown' |
'arrowRight' |
'checkFalse' |
'checkTrue' |
'chip' |
'circleIcon' |
'circleCheck' |
'circleCutout' |
'circles' |
'clockIcon' |
'cogTank' |
'globePeople' |
'lightbulb' |
'logo' |
'mapPin' |
'medal' |
'menu' |
'pin' |
'play' |
'productLogo' |
'scale' |
'shieldTick' |
'facebook' |
'linkedin' |
'twitter' |
'youtube' |
'spyglass' |
'zoom';

export type ToastVariant = 'success' | 'error' | 'neutral';

export type AccordionItem = {
  content: React.ReactNode;
  heading: React.ReactNode;
  key: string;
};
