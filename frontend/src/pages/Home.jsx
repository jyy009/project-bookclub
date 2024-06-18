import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useUserStore } from "../store/useUserStore";
import { Landing } from "./Landing";
import { AboutUs } from "./AboutUs";
import { BookClub } from "./BookClub";
import { Wishlist } from "./Wishlist";
import { Register } from "./Register";
import { SignIn } from "../components/SignIn";
import { NotFound } from "./NotFound";
import { ProfilePage } from "./ProfilePage";

export const Home = () => {
  const { setData, validateLoggedInData, isLoggedIn } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      try {
        validateLoggedInData(accessToken);
        setData("username", localStorage.getItem("username"));
        setData("isLoggedIn", localStorage.getItem("isLoggedIn"));
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    }
    setLoading(false);
  }, [validateLoggedInData]);

  // This shows an empty page until the validation is done to prevent to show unwanted pages for users that are already signed in.
  if (loading) {
    return <></>;
  }

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow overflow-auto bg-secondary">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/book-club" element={<BookClub />} />

              {isLoggedIn ? (
                <>
                  <Route path="/sign-up" element={<Navigate to="/" />} />
                  <Route path="/sign-in" element={<Navigate to="/" />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/my-profile" element={<ProfilePage />} />
                </>
              ) : (
                <>
                  <Route path="/sign-up" element={<Register />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route
                    path="/wishlist"
                    element={<Navigate to="/sign-up" />}
                  />
                </>
              )}
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};
