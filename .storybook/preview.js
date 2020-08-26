import React from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";

export const decorators = [
  (Story) => (
    <Provider theme={defaultTheme} colorScheme="light">
      <Story />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
