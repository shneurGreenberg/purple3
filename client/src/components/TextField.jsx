import React, { useCallback } from "react";
import { TextField } from "@shopify/polaris";

export function TextFieldFn(props) {
  const handleChange = useCallback(
    (newValue) => {
      props.onChangeValue(newValue);
    },
    [props]
  );

  return (
    <TextField
      label={props.title}
      value={props.value}
      onChange={handleChange}
      autoComplete="off"
      multiline={props.multiline}
      type={props.type}
    />
  );
}
