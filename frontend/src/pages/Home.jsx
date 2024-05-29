import { BrowserRouter } from "react-router-dom";
import { RouteList } from "../components/RouteList";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </>
  );
};
