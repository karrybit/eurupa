import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TextFieldComponent from "./TextFieldComponent";
import useTextField from "./TextFieldHook";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const TextFieldContainer: FC = () => {
  const [text, setText] = useTextField("");
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          <TextFieldComponent text={text} setText={setText} />
          <p>{text}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default TextFieldContainer;
