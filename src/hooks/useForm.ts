import {
  ChangeEvent, FormEvent, useState,
} from 'react';
import {
  FormState, UseForm,
} from './hooks.types';
import { getToken } from '@/utils';
import { backendUrl, Endpoints } from '@/static';
import { ToastVariant } from '@/types';

const MAX_FILES_SIZE = 20 * 1024 * 1024;

export const useForm: UseForm = (fields, formId, maxFileSizeConfig = {
  message: 'files limit exceeded',
  size: MAX_FILES_SIZE,
}) => {
  const getInitialFormState = (): FormState => fields.reduce((previous, current) => ({
    ...previous,
    [current.name]: current.type === 'checkbox' ? false : '',
  }), {});

  const [isFetching, setFetching] = useState(false);
  const [isToastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [toastVariant, setToastVariant] = useState<ToastVariant>('success');
  const [formState, setFormState] = useState<FormState>(getInitialFormState());

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.type === 'file' && event.target instanceof HTMLInputElement) {
      setFiles(event.target.files);

      return;
    }

    if (event.target.type === 'checkbox') {
      setFormState(current => ({
        ...current,
        [event.target.name]: !current[event.target.name],
      }));

      return;
    }

    setFormState(current => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNotification = () => {
    setToastVisible(current => !current);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFetching(true);
    setToastVisible(false);

    const formData = new FormData();

    Object.entries(formState).forEach(([key, value]) => {
      if (value) {
        formData.append(key, String(value));
      }
    });

    if (files && files.length > 0) {
      let fileSize: number = 0;

      Array.from(files).forEach((file, index) => {
        formData.append(`your-files-${index + 1}`, file, file.name);
        fileSize += file.size;
      });

      if (fileSize > maxFileSizeConfig.size) {
        setMessage(maxFileSizeConfig.message);
        setToastVisible(true);
        setToastVariant('error');
        setFetching(false);

        return;
      }
    }

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

      if (!isSuccess) {
        setMessage(result.message);
        setToastVariant('error');
        setToastVisible(true);
        setFetching(false);

        return;
      }

      setToastVisible(true);
      setMessage(result.message);
      setToastVariant('success');
    } catch (error: Error | any) {
      setToastVisible(true);
      setMessage(error?.message ?? 'error');
      setToastVariant('error');
    }

    setFetching(false);
  };

  return {
    files,
    formState,
    handleChange,
    handleNotification,
    handleSubmit,
    isFetching,
    isToastVisible,
    message,
    toastVariant,
  };
};
