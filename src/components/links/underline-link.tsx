import * as React from 'react';

import { clsxm } from '@src/lib/utils';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@src/components/links/unstyled-link';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'animated-underline custom-link inline-flex items-center font-medium',
          'focus-visible:ring-primary-500 focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-offset-2',
          'border-dark border-b border-dotted hover:border-black/0',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;
