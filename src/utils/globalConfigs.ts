import { IOptions } from 'sanitize-html';

export const sanitizeConfig: IOptions = {
  allowedAttributes: {
    a: [
      'class',
      'href',
      'rel',
      'target',
    ],
    img: ['alt', 'src'],
    source: [
      'srcset',
      'src',
      'type',
    ],
    video: ['controls', 'class'],
  },
  allowedTags: [
    'a',
    'b',
    'br',
    'em',
    'figcaption',
    'figure',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'i',
    'img',
    'p',
    'span',
    'strong',
    'source',
    'ul',
    'li',
    'video',
  ],
};
