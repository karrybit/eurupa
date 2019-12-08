import React, { FC } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import TextFieldComponent from "./TextFieldComponent";
import useTextField from "./TextFieldHook";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "10%",
      marginRight: "10%"
    }
  })
);

const TextFieldContainer: FC = () => {
  const [text, setText] = useTextField("");
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Paper>
        <div className="container">
          <TextFieldComponent text={text} setText={setText} />
          <p>{text}</p>
        </div>
      </Paper>
    </div>
  );
};

export default TextFieldContainer;
