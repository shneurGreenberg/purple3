import React, { useState, useCallback } from "react";
import { TextField, Layout, Card } from "@shopify/polaris";

export function PhoneFieldFn(props) {
  const [value, setValue] = useState("");

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <Layout>
      <Layout.Section secondary>
        <Card.Section>
          <TextField value={value} onChange={handleChange} autoComplete="off" />
        </Card.Section>
      </Layout.Section>
      <Layout.Section>
        <Card.Section>
          <TextField value={value} onChange={handleChange} autoComplete="off" />
        </Card.Section>
      </Layout.Section>
    </Layout>
  );
}
