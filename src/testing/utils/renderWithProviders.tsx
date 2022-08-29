import {render} from "@testing-library/react";
import {ThemeProvider, ToastContainer} from "@lokalise/louis";
import React from "react";

export const renderWithProviders = (component: JSX.Element) => {
  return render(
    <ThemeProvider activeTheme="base">
      {component}
      <ToastContainer />
    </ThemeProvider>
  )
}
