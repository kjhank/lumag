/* eslint-disable sort-keys */
import { GetFields } from './Form.types';

export const getFields: GetFields = fieldsMeta => ([
  {
    description: fieldsMeta['your-name'].description ?? 'your name',
    isRequired: fieldsMeta['your-name'].isRequired,
    label: fieldsMeta['your-name'].label,
    name: 'your-name',
    type: 'text',
  },
  {
    description: fieldsMeta['your-surname'].description,
    isRequired: fieldsMeta['your-surname'].isRequired,
    label: fieldsMeta['your-surname'].label,
    name: 'your-surname',
    type: 'text',
  },
  {
    description: fieldsMeta['your-email'].description,
    isRequired: fieldsMeta['your-email'].isRequired,
    label: fieldsMeta['your-email'].label,
    name: 'your-email',
    type: 'email',
  },
  {
    description: fieldsMeta['your-address'].description,
    isRequired: fieldsMeta['your-address'].isRequired,
    label: fieldsMeta['your-address'].label,
    name: 'your-address',
    type: 'text',
  },
  {
    description: fieldsMeta['your-message'].description,
    isRequired: fieldsMeta['your-message'].isRequired,
    label: fieldsMeta['your-message'].label,
    name: 'your-message',
    type: 'textarea',
  },
  {
    allowedFileTypes: [
      'video/*',
      'image/*',
      '.pdf',
    ],
    description: fieldsMeta['your-files'].description,
    isRequired: fieldsMeta['your-files'].isRequired,
    label: fieldsMeta['your-files'].label,
    name: 'your-files',
    type: 'file',
  },
  {
    description: fieldsMeta.gdpr.description,
    file: fieldsMeta.gdpr.file,
    label: fieldsMeta.gdpr.label,
    name: 'gdpr',
    type: 'dumb',
  },
  {
    description: fieldsMeta.procedure.description,
    file: fieldsMeta.procedure.file,
    isRequired: fieldsMeta.procedure.isRequired,
    label: fieldsMeta.procedure.label,
    name: 'procedure',
    type: 'checkbox',
  },
  {
    description: fieldsMeta.information.description,
    file: fieldsMeta.information.file,
    isRequired: fieldsMeta.information.isRequired,
    label: fieldsMeta.information.label,
    name: 'information',
    type: 'checkbox',
  },
]);
