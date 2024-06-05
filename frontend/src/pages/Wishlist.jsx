import { WishlistForm } from "../components/WishlistForm";
import { WishlistCard } from "../components/WishlistCard";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";

export const Wishlist = () => {
  return (
    <div>
      <Headline titleText={"Book Wishlist"} />
      <Text text={"What book would you like to read next?"} />

      <WishlistForm />
      <WishlistCard />
    </div>
  );
};
