import React from "react";
import { PrimeReactProvider } from "primereact/api";
import SearchPage from "./pages/searchpage";
import "primeicons/primeicons.css";

const App = () => {
  return (
    <PrimeReactProvider>
      {/* Here should be router */}
      <SearchPage />
    </PrimeReactProvider>
  );
};

export default App;
