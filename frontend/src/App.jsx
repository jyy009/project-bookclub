import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};
