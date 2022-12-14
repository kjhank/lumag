/* eslint-disable sort-keys */
import {
  ChangeEvent, FormEvent, useRef, useState,
} from 'react';
import sanitize, { IOptions } from 'sanitize-html';
import { ButtonLink, Container } from '@/components';
import {
  Description, FieldWrapper, Footer,
  Form, Input, Label, Section, Subheading,
} from './ContactForm.styled';
import { ContactFormProps, FormElements } from './ContactForm.types';
import { FormFieldName } from '@/types';
import { useAnchors } from '@/hooks';
import { SectionHeading } from '@/components/styled';

export const initialFormState: {
  [key in FormFieldName]: string;
} = {
  company: '',
  name: '',
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
  legal, subheading,
  text, fields,
  subjectOptions, submitText,
}: ContactFormProps) => {
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState(current => ({
      ...current,
      [event.target.id]: event.target.value,
    }));
  };

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { name } } = event;

    setLegals(current => ({
      ...current,
      [name]: !current[name],
    }));
  };

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget: { elements } } = event;

    const data = Object.keys(initialFormState).reduce((previous, key) => {
      const { value } = elements.namedItem(key) as FormElements;

      return {
        ...previous,
        [key]: value,
      };
    }, {});

    console.log(data);
  };

  useAnchors(footerRef);

  return (
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
                    required={isFieldRequired}
                  >
                    {subjectOptions.map(item => (
                      <option key={item.slug} value={item.slug}>
                        {item.description}
                        {' '}
                        (
                        {item.email}
                        )
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
              dangerouslySetInnerHTML={{ __html: sanitize(footer, sanitizeConfig) }}
            />
          </Footer>
        </Form>
      </Container>
    </Section>
  );
};
