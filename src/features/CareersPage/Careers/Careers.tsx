import { Accordion, Container } from '@/components';
import { CoverImage } from '@/components/styled';
import { CircleCheck } from '@/static';
import { CareerForm } from './CareerForm';
import {
  FormSection, Message, OfferContent,
  OfferList, OfferName, OfferSection, OffersSection,
} from './Careers.styled';
import { OfferProps, OffersProps } from './Careers.types';

export const Offer = ({ offer }: OfferProps) => (
  <OfferContent>
    <OfferSection>
      <h4>{offer.requirements.heading}</h4>
      {offer.requirements.list?.length > 0 && (
        <OfferList>
          {offer.requirements.list.map(({ item }) => (
            <li key={item}>
              <CircleCheck />
              {item}
            </li>
          ))}
        </OfferList>
      )}
    </OfferSection>
    <OfferSection>
      <h4>{offer.tasks.heading}</h4>
      {offer.tasks.list?.length > 0 && (
        <OfferList>
          {offer.tasks.list.map(({ item }) => (
            <li key={item}>
              <CircleCheck />
              {item}
            </li>
          ))}
        </OfferList>
      )}
    </OfferSection>
  </OfferContent>
);

export const Careers = ({
  background, form, formFields, formHeading, formMessage, heading, offers,
}: OffersProps) => (
  <>
    <OffersSection>
      {background && <CoverImage imageData={background} />}
      <Container marginBlockEnd={64}>
        <h2>{heading}</h2>
        <Accordion items={offers.map(offer => ({
          content: <Offer offer={offer} />,
          heading: <OfferName>{offer.name}</OfferName>,
          key: offer.name,
        }))}
        />
      </Container>
    </OffersSection>
    <FormSection>
      <Container>
        <Message>{formMessage}</Message>
        <CareerForm
          form={form} formFields={formFields}
          formHeading={formHeading}
        />
      </Container>
    </FormSection>
  </>
);
