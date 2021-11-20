import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChainId, DAppProvider } from "@usedapp/core";
import "./app.css";

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
