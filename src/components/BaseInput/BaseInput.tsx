import * as React from "react";
import { Box, InputLabel, TextField } from "@mui/material";
import "./BaseInput.css"

interface IProps {
  value: string,
  label: string,
  setValue?: (arg: string) => void,
}

export const BaseInput = ({value, label, setValue}: IProps) => {

  return (
    <Box>
      <Box>
        <InputLabel>
          {label}
        </InputLabel>
        <TextField className="input" value={value}/>
      </Box>
    </Box>
  );
}
