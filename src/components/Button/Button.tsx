import * as React from 'react';
import { Button } from '@mui/material';

interface IProps {
  onClick: () => void,
}

export const BaseButton = ({onClick}: IProps) => {
  return (
      <Button variant="contained" onClick={onClick}>Сгенерировать</Button>
  );
}
