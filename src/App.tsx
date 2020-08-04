import "./Firebase";
import React from "react";
import { Provider, defaultTheme, Button } from "@adobe/react-spectrum";
import "./App.css";

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <Button variant="cta" onPress={() => alert("Hey there!")}>
        Hello React Spectrum!
      </Button>
    </Provider>
  );
}

export default App;