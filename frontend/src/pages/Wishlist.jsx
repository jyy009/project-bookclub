import { WishlistForm } from "../components/WishlistForm";
import { WishlistCard } from "../components/WishlistCard";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { useUserStore } from "../store/useUserStore";

export const Wishlist = () => {
  const { isLoggedIn } = useUserStore();

  return (
    <div classname={"flex flex-col items-center"}>
      {isLoggedIn ? (
        <>
          <div className="flex flex-col border justify-center items-center">
            <Headline section={"py-0 pt-4"} titleText={"Book Wishlist"} />
            <Text section={"pb-2"} text={"Add your book wish!"} />
          </div>

          <div className="max-w-md mx-auto">
            <WishlistForm />
            <WishlistCard />
          </div>
        </>
      ) : (
        <Navigate replace to="/sign-up" />
      )}
    </div>
  );
};
