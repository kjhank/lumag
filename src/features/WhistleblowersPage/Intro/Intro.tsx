import { IntroProps } from './Intro.types';
import * as styled from './Intro.styled';

export const Intro = ({
  description, heading, subheading,
}: IntroProps) => (
  <styled.IntroNode>
    {heading ? <styled.Heading>{heading}</styled.Heading> : null}
    {subheading ? <styled.Subheading>{subheading}</styled.Subheading> : null}
    {description ? <styled.Description>{description}</styled.Description> : null}
  </styled.IntroNode>
);
