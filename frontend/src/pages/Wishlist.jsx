import { WishlistForm } from "../components/WishlistForm";
import { WishlistCard } from "../components/WishlistCard";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { useUserStore } from "../store/useUserStore";

export const Wishlist = () => {
  const { isLoggedIn } = useUserStore();

  return (
    <>
      {isLoggedIn ? (
        <div>
          <Headline titleText={"Book Wishlist"} />
          <Text text={"What book would you like to read next?"} />

          <WishlistForm />
          <WishlistCard />
        </div>
      ) : (
        <Navigate replace to="/sign-up" />
      )}
    </>
  );
};
