// src/setupTests.js
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

// You can add any global setup or configuration here

// Global utility function to render components with React Testing Library
global.renderWithRTL = (component) => {
  return render(component);
};
