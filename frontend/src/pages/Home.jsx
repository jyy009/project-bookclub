import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { RouteList } from "../components/RouteList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useUserStore } from "../store/useUserStore";

export const Home = () => {
  const { username, isLoggedIn, validateLoggedInData } = useUserStore();
  // const { fetchLoggedInData } = useUserStore();

  // useEffect(() => {
  //   try {
  //     const parsedToken = localStorage.getItem("token");
  //     console.log(parsedToken);
  //     validateLoggedInData(parsedToken);
  //   } catch (err) {
  //     console.error("Error parsing token:", err);
  //   }
  // }, [validateLoggedInData]);

  return (
    <>
      <BrowserRouter>
        <Header username={username} isLoggedIn={isLoggedIn} />
        <RouteList />
        <Footer />
      </BrowserRouter>
    </>
  );
};
