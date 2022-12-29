import { Container } from '@/components';
import {
  Background, ContactSplitter, Emails, Heading, Phones, Region, RegionName, Regions, Section,
} from './Reps.styled';
import { RepsProps } from './Reps.types';

export const Reps = ({
  background, heading, reps,
}: RepsProps) => (
  <Section>
    <Background imageData={background} />
    <Container>
      <Heading>{heading}</Heading>
      <Regions>
        {reps.map(rep => (
          <Region key={rep.region}>
            <div>
              <RegionName>{rep.region}</RegionName>
              <p>{rep.description}</p>
            </div>
            <ContactSplitter>
              <Phones>
                {rep.regionPhones.map(phone => (
                  <li key={phone.no}>
                    <a href={`tel:${phone.no.replaceAll(' ', '')}`}>
                      {phone.no}
                    </a>
                  </li>
                ))}
              </Phones>
              <Emails>
                {rep.emails.map(({ email }) => (
                  <li key={email}>
                    <a href={`mailto:${email}`}>
                      {email}
                    </a>
                  </li>
                ))}
              </Emails>
            </ContactSplitter>
          </Region>
        ))}
      </Regions>
    </Container>
  </Section>
);
