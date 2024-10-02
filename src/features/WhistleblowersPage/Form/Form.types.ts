import { FormObject, WhistleblowerFieldMappings } from '@/types';
import { FieldsMap } from '@/utils/utils.types';

export type FormProps = {
  declarations: {
    heading?: string;
    items: Array<{ element?: string }>;
  };
  footnotes?: string;
  form: FormObject;
  mappings: WhistleblowerFieldMappings;
  maxFileSizeConfig: {
    size: number;
    message: string;
  };
  submitText: string;
  submitTextFetching: string;
};

export type TextField = 'your-name' | 'your-surname' | 'your-email' | 'your-address' | 'your-message';

export type BooleanField = 'procedure' | 'information';

export type FileField = 'your-files';

export type Field = TextField | BooleanField | FileField;

export type FormFields = Record<TextField, string> &
Record<BooleanField, boolean | null> &
Record<FileField, FileList | null>;

export type GetFields = (fieldsMeta: WhistleblowerFieldMappings) => FieldsMap;
