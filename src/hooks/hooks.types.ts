import React from 'react';
import { FieldsMap } from '@/utils/utils.types';
import { ToastVariant } from '@/types';

export type UseOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  callback: (event: MouseEvent) => void) => void;

export type UseAnchors = <T extends HTMLElement = HTMLElement>(
  nodeRef: React.RefObject<T>) => void;

export type Field = {
  name: string;
  value: string | number | boolean;
};

export type FormState = Record<string, string | number | boolean>;

export type UseForm = (fields: FieldsMap, formId: number, maxFilesSizeConfig?: {
  message: string;
  size: number;
}) => {
  files: FileList | null;
  formState: FormState;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleNotification: () => void;
  message: string;
  toastVariant?: ToastVariant;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isFetching: boolean;
  isToastVisible: boolean;
};
