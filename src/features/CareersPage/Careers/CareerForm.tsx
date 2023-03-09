/* eslint-disable sort-keys */
import {
  ChangeEvent, FormEvent, HTMLInputTypeAttribute, MouseEvent, useRef, useState,
} from 'react';
import sanitize, { IOptions } from 'sanitize-html';
import { CareerFieldName, ToastVariant } from '@/types';
import { CareerFormProps, FormElements } from './Careers.types';
import { getToken } from '@/utils';
import {
  ArrowDown, backendUrl, Calendar, Endpoints,
} from '@/static';
import {
  FileInput, FileInputsWrapper, FormHeading, FormNode, Legal,
} from './Careers.styled';
import {
  ButtonLink, FieldWrapper, Input, Label, Toast,
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

const sanitizeConfig: IOptions = {
  allowedTags: ['a'],
};

export const CareerForm = ({
  form, formHeading, formFields,
}: CareerFormProps) => {
  const [isToastVisible, setToastVisible] = useState(false);
  const [formFile, setFormFile] = useState<File | null>(null);
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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target as HTMLInputElement;

    const [file] = files && files?.length > 0 ? Array.from(files) : [];

    setFormFile(file);
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

    if (formFile === null) return;

    const blob = new Blob([formFile]);

    formData.append('file1', blob, formFile.name);

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

  const handleInputClick = (event: MouseEvent<HTMLInputElement>) => {
    const inputNode = event.target as HTMLInputElement;

    if (inputNode.getAttribute('type') === 'date') {
      inputNode.showPicker();
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
          const key: HTMLInputTypeAttribute = field === 'dateOfBirth' ? 'date' : field;

          return isSelect
            ? (
              <FieldWrapper hasDecoration key={field}>
                <Label htmlFor={field}>
                  {formFields.fields[field as CareerFieldName].label}
                  {isRequired && '*'}
                </Label>
                <div>
                  <select
                    name={field} onChange={handleChange}
                    required={isRequired} value={formState[field as CareerFieldName]}
                  >
                    {formFields[`${field}Options`].map(option => <option key={option.slug} value={option.slug}>{option.description}</option>)}
                  </select>
                  <ArrowDown />
                </div>
              </FieldWrapper>
            )
            : (
              <FieldWrapper hasDecoration={key === 'date'} key={field}>
                <Label htmlFor={field}>
                  {formFields.fields[field as CareerFieldName].label}
                  {isRequired && '*'}
                </Label>
                <div>
                  <Input
                    as={field === 'message' ? 'textarea' : 'input'}
                    id={field} name={field}
                    onChange={handleChange}
                    onClick={handleInputClick}
                    required={isRequired}
                    type={key === 'email' || key === 'phone' || key === 'date' ? key : 'text'}
                    value={formState[field as CareerFieldName]}
                  />
                  {key === 'date' && <Calendar />}
                </div>
              </FieldWrapper>
            );
        })}

        <FileInputsWrapper>
          <Label htmlFor="file1">
            <span className="file-name">{formFile?.name ?? formFields.files.chooseFile}</span>
            <FileInput
              className="visually-hidden" id="file1"
              name="file1" onChange={handleFileChange}
              title={formFile?.name ?? formFields.files.chooseFile} type="file"
            />
            {!formFile?.name && <span className="no-file-chosen">{formFields.files.noFileChosen}</span>}
          </Label>
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
