import { Container, TextWithMedia } from '@/components';
import { SectionHeading } from '@/components/styled';
import {
  Player, Section, VideoWrapper,
} from './GetToKnowUs.styled';
import { GetToKnowUsProps } from './GetToKnowUs.types';

export const GetToKnowUs = ({
  heading,
  video,
  list,
}: GetToKnowUsProps) => (
  <Section>
    <Container>
      <SectionHeading>
        {heading}
      </SectionHeading>
      <VideoWrapper>
        <Player controls poster={video.poster.url}>
          <source src={video.webm.url} type="video/webm" />
          {video.mp4 && <source src={video.mp4.url} type="video/mp4" />}
        </Player>
      </VideoWrapper>
      <ul>
        {list.map(item => (
          <TextWithMedia
            as="li"
            heading={item.title} image={item.image}
            key={item.title} text={item.text}
          />
        ))}
      </ul>
    </Container>
  </Section>
);
