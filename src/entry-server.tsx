import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { LanguageProvider } from "./hooks/useLanguage";

export function render() {
  return renderToString(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>
  );
}
