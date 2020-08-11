import React from "react";

import { Provider, defaultTheme } from "@adobe/react-spectrum";

import MenuItem from "../components/MenuItem";

export default {
  title: "Menu Item",
  decorators: [
    (storyFn: Function) => (
      <Provider theme={defaultTheme} colorScheme="dark">
        {storyFn()}
      </Provider>
    ),
  ],
};

export const People = () => <MenuItem type="people" label="People" />;
export const Cases = () => <MenuItem type="cases" label="Cases" />;
export const Locations = () => <MenuItem type="locations" label="Locations" />;
