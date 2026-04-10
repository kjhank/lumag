import { PeopleGridProps } from './PeopleGrid.types';

import * as styled from './PeopleGrid.styled';
import * as quote from '../QuoteHero/QuoteHero.styled';
import { WPImage } from '../WPImage/WPImage';

export const PeopleGrid = ({ people }: PeopleGridProps) => (
  <styled.List>
    {people.map(item => (
      <styled.Item key={item.heading}>
        <quote.QuoteWrapper className="grid-figure">
          <WPImage className="grid-image" imageData={item.image} />
          <quote.Author>
            {item.heading}
          </quote.Author>
          <quote.Subheading>{item.subheading}</quote.Subheading>
        </quote.QuoteWrapper>
      </styled.Item>
    ))}
  </styled.List>
);
