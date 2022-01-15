import React, { useState, useCallback } from "react";
import { TextField, Layout, Card } from "@shopify/polaris";

export function PhoneFieldFn(props) {
  // const [value, setValue] = useState("");

  const handleChange = useCallback(
    (newValue) => {
      // user.value = newValue;
      props.onChangeValue(newValue);
    },
    [props]
  );
  return (
    <Layout>
      <Layout.Section secondary>
        <Card.Section>
          <TextField
            label={props.title}
            value={props.value}
            onChange={handleChange}
            autoComplete="off"
            multiline={props.multiline}
            type={props.type}
          />
        </Card.Section>
      </Layout.Section>
      <Layout.Section>
        <Card.Section>
          <TextField
            label={props.title}
            value={props.value}
            onChange={handleChange}
            autoComplete="off"
            multiline={props.multiline}
            type={props.type}
          />
        </Card.Section>
      </Layout.Section>
    </Layout>
  );
}
