import {
  ChangeEvent, FormEvent, useState,
} from 'react';
import { createPortal } from 'react-dom';
import {
  backendUrl, Endpoints, freshmailListHash,
} from '@/static';
import { getToken } from '@/utils';
import {
  NewsletterAgreement, NewsletterHeading,
  NewsletterInput, NewsletterSubmit,
} from '../Layout.styled';
import { NewsletterProps } from '../Layout.types';
import { ToastVariant } from '@/types';
import { Toast } from '@/components/Toast/Toast';

export const Newsletter = ({ copy }: NewsletterProps) => {
  const [isToastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState(copy.messages.success);
  const [toastVariant, setToastVariant] = useState<ToastVariant>('success');
  const [email, setEmail] = useState('');
  const [isAgreed, setAgreed] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCheckbox = () => {
    setAgreed(current => !current);
  };
  const handleNewsletter = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const token = await getToken();

      const body = JSON.stringify({
        email,
        list: freshmailListHash,
      });

      const response = await fetch(
        `${backendUrl}/${Endpoints.FRESHMAIL}subscriber/add`,
        {
          body,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      );

      const result = await response.json();

      const isSuccess = result.status === 'OK';

      setToastVisible(true);
      setMessage(isSuccess ? copy.messages.success : copy.messages.error);
      setToastVariant(isSuccess ? 'success' : 'error');
      setToastVisible(true);
    } catch (error) {
      setToastVariant('error');
      setMessage(copy.messages.error);
    }
  };

  return (
    <>
      <form onSubmit={handleNewsletter}>
        <NewsletterHeading>
          {copy.heading}
        </NewsletterHeading>
        <NewsletterInput
          name="email" onChange={handleEmailChange}
          placeholder={copy.placeholder}
          type="email" value={email}
        />
        <NewsletterAgreement>
          <input
            checked={isAgreed} onChange={handleCheckbox}
            type="checkbox"
          />
          {copy.agreement}
        </NewsletterAgreement>
        <NewsletterSubmit disabled={!isAgreed || !email} type="submit">
          {copy.buttonText}
        </NewsletterSubmit>
      </form>

      {isToastVisible && createPortal(
        <Toast
          close={() => setToastVisible(false)} variant={toastVariant}
        >
          {message}
        </Toast>,
        document.body
      )
      }
    </>
  );
};
