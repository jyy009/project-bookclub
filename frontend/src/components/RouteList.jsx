import { Routes, Route } from "react-router-dom";
import { AboutUs } from "../pages/AboutUs";
import { BookClub } from "../pages/BookClub";
import { Wishlist } from "../pages/Wishlist";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";
import { Landing } from "../pages/Landing";
import { SignIn } from "./SignIn";
import { useUserStore } from "../store/useUserStore";

export const RouteList = () => {
  const { isLoggedIn } = useUserStore();
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/book-club" element={<BookClub />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
