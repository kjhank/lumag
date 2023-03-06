/* eslint-disable sort-keys */
import {
  ChangeEvent, FormEvent, useRef, useState,
} from 'react';
import sanitize, { IOptions } from 'sanitize-html';
import { CareerFieldName, ToastVariant } from '@/types';
import { CareerFormProps, FormElements } from './Careers.types';
import { getToken } from '@/utils';
import { backendUrl, Endpoints } from '@/static';
import {
  FileInput, FileInputsWrapper, FormHeading, FormNode, Legal,
} from './Careers.styled';
import {
  ButtonLink,
  FieldWrapper, Input, Label, Toast,
} from '@/components';
import { useAnchors } from '@/hooks';

export const initialFormState: {
  [key in CareerFieldName]: string;
} = {
  positionName: '',
  candidateName: '',
  location: '',
  contactMethod: '',
  dateOfBirth: '1970-01-01',
  education: 'vocational',
};

export const initialFiles = [
  null,
  null,
  null,
];

const sanitizeConfig: IOptions = {
  allowedTags: ['a'],
};

export const CareerForm = ({
  form, formHeading, formFields,
}: CareerFormProps) => {
  const [isToastVisible, setToastVisible] = useState(false);
  const [formFiles, setFormFiles] = useState<Array<File | null>>(initialFiles);
  const [message, setMessage] = useState(formFields.messages.success);
  const [toastVariant, setToastVariant] = useState<ToastVariant>('success');
  const [formState, setFormState] = useState<{ [key in CareerFieldName]: string }>({
    ...initialFormState,
    contactMethod: formFields.contactMethodOptions[0].slug,
    education: formFields.educationOptions[0].slug,
  });
  const [legals, setLegals] = useState<{
    [key: string]: boolean;
  }>(form.checkboxes.reduce((previous, current) => ({
    ...previous,
    [current.slug]: false,
  }), {}));

  const checkboxesRef = useRef(null);
  const gdprRef = useRef(null);

  useAnchors(checkboxesRef);
  useAnchors(gdprRef);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState(current => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, fileIndex: number) => {
    const { files } = event.target as HTMLInputElement;

    const [file] = files && files?.length > 0 ? Array.from(files) : [];

    setFormFiles(current => {
      const copy = [...current];

      copy[fileIndex] = file;

      return copy;
    });
  };

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name } } = event;

    setLegals(current => ({
      ...current,
      [name]: !current[name],
    }));
  };

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget: { elements } } = event;
    const formElems = Array.from(elements);
    const formId = form.formObject.ID;

    const formData = new FormData();

    formElems
      .forEach(item => {
        const fieldName = (item as FormElements).name;

        if (fieldName === 'contactMethod' || fieldName === 'education') {
          const value = formFields[`${fieldName}Options`].find(({ slug }) => slug === (item as FormElements).value);

          return formData.append(fieldName, value?.description as string);
        }

        return formData.append(
          (item as FormElements).name,
          (item as FormElements).value
        );
      });

    formFiles.forEach((file, index) => {
      if (file === null) return;
      const blob = new Blob([file]);

      formData.append(`file${index + 1}`, blob, file.name);
    });

    try {
      const token = await getToken();

      const response = await fetch(`${backendUrl}/${Endpoints.FORMS}${formId}/feedback`, {
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
      });

      const result = await response.json();

      const isSuccess = result.status === 'mail_sent';

      setToastVisible(true);
      setMessage(isSuccess ? formFields.messages.success : formFields.messages.error);
      setToastVariant(isSuccess ? 'success' : 'error');
      setToastVisible(true);
    } catch (error) {
      setToastVariant('error');
      setMessage(formFields.messages.error);
    }
  };

  return (
    <>
      <FormNode onSubmit={handleForm}>
        <FormHeading>
          {formHeading}
        </FormHeading>
        {Object.keys(initialFormState).map(field => {
          const isSelect = field === 'contactMethod' || field === 'education';
          const { isRequired } = formFields.fields[field as CareerFieldName];
          const key = field === 'dateOfBirth' ? 'date' : field;

          return isSelect
            ? (
              <FieldWrapper key={field}>
                <Label htmlFor={field}>
                  {formFields.fields[field as CareerFieldName].label}
                  {isRequired && '*'}
                </Label>
                <select
                  name={field} onChange={handleChange}
                  required={isRequired} value={formState[field as CareerFieldName]}
                >
                  {formFields[`${field}Options`].map(option => <option key={option.slug} value={option.slug}>{option.description}</option>)}
                </select>
              </FieldWrapper>
            )
            : (
              <FieldWrapper key={field}>
                <Label htmlFor={field}>
                  {formFields.fields[field as CareerFieldName].label}
                  {isRequired && '*'}
                </Label>
                <Input
                  as={field === 'message' ? 'textarea' : 'input'}
                  id={field} name={field}
                  onChange={handleChange}
                  required={isRequired}
                  type={key === 'email' || key === 'phone' || key === 'date' ? key : 'text'}
                  value={formState[field as CareerFieldName]}
                />
              </FieldWrapper>
            );
        })}

        <FileInputsWrapper>
          {formFiles.map((file, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Label htmlFor={`file-${index + 1}`} key={index}>
              <span className="file-name">{file?.name ?? formFields.files.chooseFile}</span>
              <FileInput
                className="visually-hidden" id={`file-${index + 1}`}
                name={`file-${index + 1}`} onChange={event => handleFileChange(event, index)}
                title={file?.name ?? formFields.files.chooseFile} type="file"
              />
              {!file?.name && <span className="no-file-chosen">{formFields.files.noFileChosen}</span>}
            </Label>
          ))}
        </FileInputsWrapper>
        <Legal ref={checkboxesRef}>
          {form.checkboxes.map(checkbox => (
            <FieldWrapper
              isFullWidth key={checkbox.slug}
              variant="checkbox"
            >
              <input
                checked={legals[checkbox.slug]} id={checkbox.slug}
                name={checkbox.slug} onChange={handleCheckbox}
                required={checkbox.isRequired} type="checkbox"
                value={checkbox.slug}
              />
              <Label
                dangerouslySetInnerHTML={{ __html: sanitize(checkbox.checkbox, sanitizeConfig) }}
                htmlFor={checkbox.slug}
              />
            </FieldWrapper>
          ))}
          <p dangerouslySetInnerHTML={{ __html: sanitize(form.disclaimer, sanitizeConfig) }} />

        </Legal>
        <FieldWrapper isFullWidth>
          <ButtonLink isButton type="submit">
            {form.submitText}
          </ButtonLink>
        </FieldWrapper>
      </FormNode>
      <Legal ref={gdprRef}>
        <p dangerouslySetInnerHTML={{ __html: sanitize(form.legal, sanitizeConfig) }} />
      </Legal>
      {isToastVisible && (
        <Toast
          close={() => setToastVisible(false)} variant={toastVariant}
        >
          {message}
        </Toast>
      )}
    </>
  );
};
