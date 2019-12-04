import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const userStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  })
);

interface TextFieldComponentProps {
  text: string;
  setText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldComponent: FC<TextFieldComponentProps> = ({ text, setText }) => {
  const classes = userStyles();
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="filled"
          value={text}
          onChange={setText}
          fullWidth={true}
        />
      </div>
    </form>
  );
};

export default TextFieldComponent;
