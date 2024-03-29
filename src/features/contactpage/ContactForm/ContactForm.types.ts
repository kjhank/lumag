import {
  FormField, FormFieldName, FormMessages, Legal, SubjectOption,
} from '@/types';

export type ContactFormProps = {
  heading: string;
  subheading: string;
  text: string;
  fields: {
    [key in FormFieldName]: FormField;
  };
  legal: Array<Legal>;
  messages: FormMessages;
  subjectOptions: Array<SubjectOption>;
  submitText: string;
  footer: string;
};

export type FormElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
