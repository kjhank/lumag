import {
  ACFImage, JobForm, JobFormFields, JobOffer,
} from '@/types';

export type OfferProps = {
  offer: JobOffer;
};

export type OffersProps = {
  background: ACFImage;
  form: JobForm;
  formFields: JobFormFields;
  formHeading: string;
  formMessage: string;
  heading: string;
  offers: Array<JobOffer>;
};

export type CareerFormProps = {
  form: JobForm;
  formFields: JobFormFields;
  formHeading: string;
};

export type FormElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
