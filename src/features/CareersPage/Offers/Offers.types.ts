import { ACFImage, JobOffer } from '@/types';

export type OfferProps = {
  offer: JobOffer;
};

export type OffersProps = {
  background: ACFImage;
  heading: string;
  offers: Array<JobOffer>;
};
