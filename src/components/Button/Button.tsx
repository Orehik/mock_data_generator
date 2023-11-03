import * as React from 'react';
import { Button } from '@mui/material';

interface IProps {
  onClick: () => void,
  className?: string,
}

export const BaseButton = ({onClick, className}: IProps) => {
  return (
      <Button className={className} variant="contained" onClick={onClick}>Сгенерировать</Button>
  );
}
