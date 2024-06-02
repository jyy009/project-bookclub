import { BrowserRouter } from "react-router-dom";
import { RouteList } from "../components/RouteList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RouteList />
      </BrowserRouter>
      <Footer />
    </>
  );
};
