import { IOptions } from 'sanitize-html';

export const sanitizeConfig: IOptions = {
  allowedAttributes: {
    a: [
      'class',
      'href',
      'rel',
      'target',
    ],
  },
  allowedTags: [
    'a',
    'b',
    'br',
    'em',
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
    'strong',
    'source',
    'ul',
    'li',
    'video',
  ],
};
