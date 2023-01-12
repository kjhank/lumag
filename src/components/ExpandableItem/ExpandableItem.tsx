import sanitize from 'sanitize-html';
import { useState } from 'react';
import {
  ItemContent, ItemHeading, ItemImage, ItemNode, ItemText,
} from './ExpandableItem.styled';
import { sanitizeConfig } from '@/utils/globalConfigs';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { ExpandableItemProps } from './ExpendableItem.types';

export const ExpandableItem = ({
  className, buttons, children, image, text, title, trimmedTextLength = 30,
}: ExpandableItemProps) => {
  const [isExpanded, setExpanded] = useState(false);

  const sanitizedText = sanitize(text, sanitizeConfig);
  const trimmedText = text
    ? sanitize(`${text.split(' ').slice(0, trimmedTextLength)
      .join(' ')}`, sanitizeConfig)
    : '';

  const showButton = sanitizedText.length > trimmedText.length;
  const content = isExpanded ? sanitizedText : trimmedText;

  return (
    <ItemNode className={className}>
      <ItemImage imageData={image} />
      <div>
        <ItemContent isExpanded={isExpanded}>
          <ItemHeading>{title}</ItemHeading>
          {children}
          <ItemText html={content.endsWith('</p>') && showButton ? `${content.slice(0, -4)} [...]</p>` : content} />
          {showButton && (
          <ButtonLink onClick={() => setExpanded(current => !current)}>
            {isExpanded ? buttons.active : buttons.inactive}
          </ButtonLink>
          )}
        </ItemContent>
      </div>
    </ItemNode>
  );
};
