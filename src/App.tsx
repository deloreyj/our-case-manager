import "./Firebase";
import React from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";

import CasesPage from "./components/CasesPage/CasesPage";

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <CasesPage />
    </Provider>
  );
}

export default App;
