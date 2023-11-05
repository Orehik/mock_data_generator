import * as React from 'react';
import { Button } from '@mui/material';

interface IProps {
  onClick: () => void,
  children: React.ReactNode,
}

export const BaseButton = ({onClick, children, ...props}: IProps) => {
  return (
      <Button style={{backgroundColor: "#222222"}} variant="contained" onClick={onClick} {...props}>{children}</Button>
  );
}
