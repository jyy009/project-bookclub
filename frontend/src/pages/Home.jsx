import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { RouteList } from "../components/RouteList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useUserStore } from "../store/useUserStore";

export const Home = () => {
  // const { fetchLoggedInData } = useUserStore();

  // useEffect(() => {
  //   const storedAccessToken = localStorage.getItem("token");
  //   try {
  //     const parsedToken = JSON.parse(storedAccessToken);
  //     fetchLoggedInData(parsedToken);
  //   } catch (err) {
  //     setError(true);
  //     console.error("Error parsing token:", err);
  //   }
  // }, [fetchLoggedInData]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <RouteList />
        <Footer />
      </BrowserRouter>
    </>
  );
};
