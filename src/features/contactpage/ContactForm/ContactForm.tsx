/* eslint-disable sort-keys */
import {
  ChangeEvent, FormEvent, useRef, useState,
} from 'react';
import sanitize, { IOptions } from 'sanitize-html';
import {
  ButtonLink, Container, FieldWrapper, Input, Label, Toast,
} from '@/components';
import {
  Description, Footer,
  Form, Section, Subheading,
} from './ContactForm.styled';
import { ContactFormProps, FormElements } from './ContactForm.types';
import { FormFieldName, ToastVariant } from '@/types';
import { useAnchors } from '@/hooks';
import { SectionHeading } from '@/components/styled';
import {
  backendUrl, Endpoints,
} from '@/static';
import { getToken } from '@/utils';

export const initialFormState: {
  [key in FormFieldName]: string;
} = {
  company: '',
  username: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const sanitizeConfig: IOptions = {
  allowedTags: ['a'],
};

export const ContactForm = ({
  heading, footer,
  legal, messages, subheading,
  text, fields,
  subjectOptions, submitText,
}: ContactFormProps) => {
  const [isToastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState(messages.success);
  const [toastVariant, setToastVariant] = useState<ToastVariant>('success');
  const [formState, setFormState] = useState<{ [key in FormFieldName]: string }>({
    ...initialFormState,
    subject: subjectOptions[0].slug,
  });
  const [legals, setLegals] = useState<{
    [key: string]: boolean;
  }>(legal.reduce((previous, current) => ({
    ...previous,
    [current.slug]: false,
  }), {}));

  const footerRef = useRef(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState(current => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
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
    const subject = (elements.namedItem('subject') as FormElements).value;
    const formElems = Array.from(elements);
    const { formId } = subjectOptions.find(item => item.slug === subject) ?? {};

    const formData = new FormData();

    formElems
      .forEach(item => formData.append(
        (item as FormElements).name,
        (item as FormElements).value
      ));

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
      setMessage(isSuccess ? messages.success : messages.error);
      setToastVariant(isSuccess ? 'success' : 'error');
      setToastVisible(true);
    } catch (error) {
      setToastVariant('error');
      setMessage(messages.error);
    }
  };

  useAnchors(footerRef);

  return (
    <>
      <Section id="contactForm">
        <Container>
          <div>
            <SectionHeading>
              {heading}
            </SectionHeading>
            <Subheading>
              {subheading}
            </Subheading>
            <Description>{text}</Description>
          </div>
          <Form onSubmit={handleForm}>
            {Object.keys(initialFormState).map(key => {
              const isSelect = key === 'subject';
              const isFieldRequired = fields[key as FormFieldName].isRequired;

              return isSelect
                ? (
                  <FieldWrapper isFullWidth key={key}>
                    <Label htmlFor={key}>
                      {fields[key as FormFieldName].label}
                      {isFieldRequired && '*'}
                    </Label>
                    <select
                      name={key}
                      onChange={handleChange}
                      required={isFieldRequired}
                      value={formState[key as FormFieldName]}
                    >
                      {subjectOptions.map(item => (
                        <option key={item.slug} value={item.slug}>
                          {item.description}
                        </option>
                      ))}
                    </select>
                  </FieldWrapper>
                )
                : (
                  <FieldWrapper isFullWidth={key === 'message'} key={key}>
                    <Label htmlFor={key}>
                      {fields[key as FormFieldName].label}
                      {isFieldRequired && '*'}
                    </Label>
                    <Input
                      as={key === 'message' ? 'textarea' : 'input'}
                      id={key} name={key}
                      onChange={handleChange}
                      required={isFieldRequired}
                      type={key === 'email' || key === 'phone' ? key : 'text'}
                      value={formState[key as FormFieldName]}
                    />
                  </FieldWrapper>
                );
            })}
            <FieldWrapper isFullWidth>
              <ButtonLink isButton type="submit">
                {submitText}
              </ButtonLink>
            </FieldWrapper>
            <Footer ref={footerRef}>
              {legal.map(checkbox => (
                <FieldWrapper
                  isFullWidth key={checkbox.slug}
                  variant="checkbox"
                >
                  <input
                    checked={legals[checkbox.slug]}
                    id={checkbox.slug}
                    name={checkbox.slug}
                    onChange={handleCheckbox}
                    required={checkbox.isRequired}
                    type="checkbox"
                    value={checkbox.slug}
                  />
                  <Label
                    dangerouslySetInnerHTML={{ __html: sanitize(checkbox.content, sanitizeConfig) }}
                    htmlFor={checkbox.slug}
                  />
                </FieldWrapper>
              ))}
              <p
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: sanitize(footer, sanitizeConfig) }}
              />
            </Footer>
          </Form>
        </Container>
      </Section>
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
