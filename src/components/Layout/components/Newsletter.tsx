import {
  ChangeEvent, FormEvent, useState,
} from 'react';
import { createPortal } from 'react-dom';
import {
  backendUrl, Endpoints,
} from '@/static';
import { getToken, isBrowser } from '@/utils';
import {
  NewsletterAgreement, NewsletterHeading,
  NewsletterInput, NewsletterSubmit,
} from '../Layout.styled';
import { NewsletterProps } from '../Layout.types';
import {
  FreshmailConfig, Status, ToastVariant,
} from '@/types';
import { Toast } from '@/components/Toast/Toast';

export const Newsletter = ({ data }: NewsletterProps) => {
  const [isToastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState(data?.messages?.success);
  const [toastVariant, setToastVariant] = useState<ToastVariant>('success');
  const [email, setEmail] = useState('');
  const [isAgreed, setAgreed] = useState(false);
  const [isSending, setSending] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCheckbox = () => {
    setAgreed(current => !current);
  };
  const handleNewsletter = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    try {
      const token = await getToken();

      const body: FreshmailConfig = {
        email,
        list: data.mailListHash,
        status: Status.active,
      };

      const response = await fetch(
        `${backendUrl}/${Endpoints.FRESHMAIL}subscriber/add`,
        {
          body: JSON.stringify(body),
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      );

      const result = await response.json();

      const isSuccess = result.status === 'OK';

      if (!isSuccess) {
        const [error] = result.errors;

        throw new Error(error.code, { cause: error.message });
      }

      setToastVisible(true);
      setMessage(isSuccess ? data?.messages?.success : data?.messages?.error);
      setToastVariant(isSuccess ? 'success' : 'error');
      setToastVisible(true);
      setSending(false);
    } catch (error) {
      const exists = (error as { message: string }).message.includes('1304');

      setToastVariant('error');
      setMessage(exists ? data?.messages?.exists : data?.messages?.error);
      setToastVisible(true);
      setSending(false);
    }
  };

  return (
    <>
      <form id="newsletterForm" onSubmit={handleNewsletter}>
        <NewsletterHeading>
          {data?.heading}
        </NewsletterHeading>
        <NewsletterInput
          name="email" onChange={handleEmailChange}
          placeholder={data?.placeholder}
          type="email" value={email}
        />
        <NewsletterAgreement>
          <input
            checked={isAgreed} onChange={handleCheckbox}
            type="checkbox"
          />
          <span>{data?.agreement}</span>
        </NewsletterAgreement>
        <NewsletterSubmit disabled={!isAgreed || !email || isSending} type="submit">
          {data?.buttonText}
        </NewsletterSubmit>
      </form>

      {isBrowser && isToastVisible && createPortal(
        <Toast
          close={() => setToastVisible(false)} variant={toastVariant}
        >
          {message}
        </Toast>,
        // @ts-ignore
        document.querySelector('#newsletterForm')
      )
      }
    </>
  );
};
