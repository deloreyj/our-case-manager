import React from "react";
import { action } from "@storybook/addon-actions";

import { Provider, defaultTheme } from "@adobe/react-spectrum";

import Suspects from "../screens/Suspects";
import { NavigationListItem } from "../components/NavigationList";

export default {
  title: "Suspects",
  decorators: [
    (storyFn: Function) => (
      <Provider theme={defaultTheme} colorScheme="light">
        {storyFn()}
      </Provider>
    ),
  ],
};

export const SuspectListStory = () => {
  const suspects: Array<NavigationListItem> = [
    { id: "suspect1", name: "Billy" },
    { id: "suspect2", name: "Franky The Fish" },
  ];

  return <Suspects suspects={suspects} onSuspectClick={action("clicked")} />;
};
