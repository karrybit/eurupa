import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";

interface TextFieldComponentProps {
  text: string;
  setText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComponent: FC<TextFieldComponentProps> = ({ text, setText }) => {
  return (
    <div>
      <TextField
        margin="normal"
        variant="outlined"
        multiline={true}
        fullWidth={true}
        value={text}
        onChange={setText}
      />
    </div>
  );
};

export default TextFieldComponent;
