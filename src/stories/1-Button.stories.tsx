import React from "react";
import { action } from "@storybook/addon-actions";

import { Provider, defaultTheme, Button } from "@adobe/react-spectrum";

export default {
  title: "Spectrum Buttons",
  decorators: [
    (storyFn) => (
      <Provider theme={defaultTheme} colorScheme="light">
        {storyFn()}
      </Provider>
    ),
  ],
};

export const CTA = () => (
  <Button variant="cta" onClick={action("clicked")}>
    I Call Thee To Action!
  </Button>
);

export const Negative = () => (
  <Button variant="negative" onClick={action("clicked")}>
    Be Careful!
  </Button>
);

export const Primary = () => (
  <Button variant="primary" onClick={action("clicked")}>
    Primary
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary" onClick={action("clicked")}>
    Secondary
  </Button>
);