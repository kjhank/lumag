import { ButtonLinkProps } from './ButtonLink.types';
import {
  Anchor, Button, GatsbyLink,
} from './ButtonLink.styled';
import { ArrowRight } from '@/static';

export const ButtonLink = ({
  children, className,
  disabled, hasArrow = true,
  isButton = false, onClick,
  style, to,
  type = 'button', ...props
} : ButtonLinkProps) => {
  const rules = [
    'http',
    './#',
    'mailto:',
    'tel',
  ];

  if (onClick || isButton) {
    return (
      <Button
        className={className}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {children}
        {hasArrow && <ArrowRight />}
      </Button>
    );
  }

  if (!to) return null;

  const isExternal = !!rules.find(rule => to.startsWith(rule));

  if (isExternal) {
    return (
      <Anchor
        className={className} href={to}
        {...props}
      >
        {children}
        {hasArrow && <ArrowRight />}
      </Anchor>
    );
  }

  return (
    <GatsbyLink
      className={className} style={style}
      to={to}
      {...props}
    >
      {children}
      {hasArrow && <ArrowRight />}
    </GatsbyLink>
  );
};
