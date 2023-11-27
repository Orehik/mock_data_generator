import * as React from 'react';
import { Button } from '@mui/material';

interface IProps {
  onClick: () => void,
  children: React.ReactNode,
  className?: string,
}

export const BaseButton = ({onClick, children, className, ...props}: IProps) => {
  return (
      <Button className={className} style={{backgroundColor: "#222222"}} variant="contained" onClick={onClick} {...props}>{children}</Button>
  );
}
