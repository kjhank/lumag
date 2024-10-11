import { ComponentPropsWithoutRef } from 'react';
import sanitize, { IOptions } from 'sanitize-html';
import { FormProps } from './Form.types';
import { getFields } from './Form.static';
import * as styled from '@/components';

import { useForm } from '@/hooks/useForm';
import { ButtonLink, Toast } from '@/components';
import { CloudArrowDown, CloudArrowUp } from '@/static';
import {
  Declarations, Footnotes, Heading,
} from './Form.styled';

const sanitizeConfig: IOptions = {
  allowedTags: [
    'em',
    'strong',
    'br',
  ],
};

export const Form = ({
  declarations, footnotes, form, mappings, maxFileSizeConfig,
  submitText, submitTextFetching, submitTextSentError, submitTextSentSuccess,
}: FormProps) => {
  const fields = getFields(mappings);

  const {
    files, formState, handleChange, handleNotification, handleSubmit,
    isFetching, isToastVisible, message, toastVariant,
  } = useForm(fields, form.ID, maxFileSizeConfig);

  return (
    <>
      <styled.Form onSubmit={handleSubmit}>
        {fields.map(({
          allowedFileTypes, description, file, isRequired, label, name, type,
        }) => {
          const commonProps: ComponentPropsWithoutRef<'textarea' | 'input'> = {
            id: name,
            name,
            onChange: handleChange,
            required: isRequired,
            type,
          };

          if (type === 'textarea') {
            return (
              <styled.FieldWrapper
                className="areas" isFullWidth
                key={name}
              >
                <styled.Label htmlFor={name}>
                  <span>
                    {label}
                    {isRequired ? '*' : ''}
                  </span>
                </styled.Label>
                <styled.Textarea
                  {...commonProps as ComponentPropsWithoutRef<'textarea'>} className="content"
                  value={formState[name]?.toString()}
                />
                {description
                  ? (
                    // eslint-disable-next-line react/no-danger
                    <p
                      className={`content description ${formState[name]?.toString() ? 'has-value' : ''}`} dangerouslySetInnerHTML={{
                        __html: sanitize(description, sanitizeConfig),
                      }}
                    />
                  )
                  : null}
              </styled.FieldWrapper>
            );
          }

          if (type === 'file') {
            return (
              <styled.FieldWrapper
                className="files" isFullWidth
                key={name}
              >
                <styled.Label className="files" htmlFor={name}>
                  <span>
                    {label}
                    {isRequired ? '*' : ''}
                  </span>
                </styled.Label>
                {description
                  ? (
                    <p
                      // eslint-disable-next-line react/no-danger
                      className="description" dangerouslySetInnerHTML={{
                        __html: sanitize(description, sanitizeConfig),
                      }}
                    />
                  )
                  : null}
                <styled.FilesWrapper className="file-input-wrapper">
                  <CloudArrowUp />
                  <styled.Input
                    {...commonProps as ComponentPropsWithoutRef<'input'>}
                    accept={allowedFileTypes ? String(allowedFileTypes) : ''}
                    multiple
                    type="file"
                  />
                </styled.FilesWrapper>
                {files && files.length > 0
                  ? (
                    <styled.FilesList>
                      {Array.from(files).map(singleFile => (
                        <li key={singleFile.name}>
                          {singleFile.name}
                        </li>
                      ))}
                    </styled.FilesList>
                  )
                  : null}
              </styled.FieldWrapper>
            );
          }

          if (type === 'dumb') {
            return (
              <styled.FieldWrapper
                className="files" isFullWidth
                key={name}
              >
                <styled.Label as="div" className="dumb">
                  {label}
                </styled.Label>
                {description ? <p className="dumb-description">{description}</p> : null}
                {file
                  ? (
                    <styled.FramedLink
                      aria-label="download file" className="text-variant"
                      href={file}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      Zapoznaj się z klauzulą informacyjną
                      {/* TODO: hardcoded for now */}
                    </styled.FramedLink>
                  )
                  : null}
              </styled.FieldWrapper>
            );
          }

          if (type === 'checkbox') {
            return (
              <styled.FieldWrapper isFullWidth key={name}>
                <styled.Input
                  {...commonProps}
                  checked={!!formState[name]}
                />
                {description
                  ? (
                    <styled.Label htmlFor={name}>
                      <span>
                        <span
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{
                            __html: sanitize(description, sanitizeConfig),
                          }}
                        />
                        {isRequired ? '*' : ''}
                      </span>
                    </styled.Label>
                  )
                  : null}
                {file
                  ? (
                    <styled.FramedLink
                      aria-label="open file"
                      href={file}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <CloudArrowDown />
                    </styled.FramedLink>
                  )
                  : null}
              </styled.FieldWrapper>
            );
          }

          return (
            <styled.FieldWrapper key={name}>
              <styled.Label htmlFor={name}>
                <span>
                  {label}
                  {isRequired ? '*' : ''}
                </span>
              </styled.Label>
              <styled.Input
                {...commonProps as ComponentPropsWithoutRef<'input'>}
                value={typeof formState[name] === 'boolean' ? '' : formState[name]}
              />
            </styled.FieldWrapper>
          );
        })}
        <styled.FieldWrapper isFullWidth>
          {declarations.heading ? <Heading>{declarations.heading}</Heading> : null}
          <Declarations>
            {declarations.items.map(({ element }) => <li key={element}>{element}</li>)}
          </Declarations>
          <Footnotes>{footnotes}</Footnotes>
        </styled.FieldWrapper>
        <styled.FieldWrapper isFullWidth>
          <ButtonLink
            className={isToastVisible ? toastVariant : undefined}
            disabled={isFetching} isButton
            type="submit"
          >
            {isFetching && !isToastVisible && !toastVariant ? submitTextFetching : null}
            {!isFetching && !isToastVisible && !toastVariant ? submitText : null}
            {!isFetching && toastVariant === 'success' ? submitTextSentSuccess : null}
            {!isFetching && toastVariant === 'error' ? submitTextSentError : null}
          </ButtonLink>
        </styled.FieldWrapper>
      </styled.Form>

      {isToastVisible
        ? (
          <Toast
            close={handleNotification} variant={toastVariant}
          >
            {message}
          </Toast>
        )
        : null}
    </>
  );
};
