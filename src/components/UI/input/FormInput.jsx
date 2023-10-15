import React from "react";
import classes from "./FormInput.module.css";

export const FormInput = React.forwardRef((props, ref) => {
    return <input ref={ref} {...props} className={classes.formInp} />;
});
