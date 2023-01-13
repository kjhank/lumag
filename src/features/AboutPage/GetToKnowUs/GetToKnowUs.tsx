import { Container, TextWithMedia } from '@/components';
import { SectionHeading } from '@/components/styled';
import {
  Player, Section, VideoWrapper,
} from './GetToKnowUs.styled';
import { GetToKnowUsProps } from './GetToKnowUs.types';

export const GetToKnowUs = ({
  heading,
  layout,
  video,
  list,
}: GetToKnowUsProps) => (
  <Section>
    <Container>
      <SectionHeading>
        {heading}
      </SectionHeading>
      <VideoWrapper>
        <Player
          autoplay={false} controls
          poster={video.poster.url}
        >
          <source src={video.webm.url} type="video/webm" />
          {video.mp4 && <source src={video.mp4.url} type="video/mp4" />}
        </Player>
      </VideoWrapper>
      <ul className="text-media">
        {list.map(item => (
          <TextWithMedia
            as="li"
            backgroundIndex={5}
            heading={item.title} image={item.image}
            key={item.title}
            layout={layout} text={item.text}
          />
        ))}
      </ul>
    </Container>
  </Section>
);
