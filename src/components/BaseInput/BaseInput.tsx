import * as React from "react";
import { Box, InputLabel, TextField } from "@mui/material";
import "./BaseInput.css"

interface IProps {
  value: string,
  label: string,
  className?: string,
}

export const BaseInput = ({value, label, className}: IProps) => {

  return (
    <Box className={className}>
      <Box>
        <InputLabel>
          {label}
        </InputLabel>
        <TextField className="input" value={value}/>
      </Box>
    </Box>
  );
}
