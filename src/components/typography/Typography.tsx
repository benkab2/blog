import React, { FC, ReactNode } from 'react';
import { Typography as UITypography } from '@mui/material';
import type { TypographyProps as UITypographyProps } from '@mui/material';

interface TypographyProps extends UITypographyProps {
  children: ReactNode;
  className?: string;
  testId?: string;
}

const Typography: FC<TypographyProps> = ({ children, className, testId = 'typography' }) => (
  <UITypography data-testid={testId} className={className}>
    {children}
  </UITypography>
);

export { Typography };
