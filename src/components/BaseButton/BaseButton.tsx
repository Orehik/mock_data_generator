import * as React from 'react';
import { Button } from '@mui/material';

interface IProps {
  onClick: () => void,
  className?: string,
  children: React.ReactNode,
}

export const BaseButton = ({onClick, className, children, ...props}: IProps) => {
  return (
      <Button style={{backgroundColor: "#222222"}} className={className || ""} variant="contained" onClick={onClick} {...props}>{children}</Button>
  );
}
