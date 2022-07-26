import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CurrentPostProvider } from "./contexts/CurrentPostProvider";
import { DarkModeProvider } from "./contexts/DarkModeProvider";
import { LoadingProvider } from "./contexts/LoadingProvider";
import { ModalProvider } from "./contexts/ModalProvider";
import { PostProvider } from "./contexts/PostProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <ModalProvider>
        <LoadingProvider>
          <PostProvider>
            <CurrentPostProvider>
              <App />
            </CurrentPostProvider>
          </PostProvider>
        </LoadingProvider>
      </ModalProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
