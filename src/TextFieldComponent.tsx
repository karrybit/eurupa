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
        id="filled-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
        margin="normal"
        variant="filled"
        value={text}
        onChange={setText}
        fullWidth={true}
      />
    </div>
  );
};

export default TextFieldComponent;
