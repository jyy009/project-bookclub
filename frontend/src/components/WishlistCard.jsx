import { useWishStore } from "../store/useWishStore";
import { Text } from "../atoms/Text";
import { Heart } from "../components/Heart";
import { useEffect } from "react";

export const WishlistCard = () => {
  const { wishlist, fetchWishlist } = useWishStore();

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <>
      {wishlist.map((wish) => (
        <div key={wish._id}>
          <Text text={wish.message} />
        </div>
      ))}
    </>
  );
};
