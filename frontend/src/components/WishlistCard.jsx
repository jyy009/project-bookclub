import { useWishStore } from "../store/useWishStore";
import { Text } from "../atoms/Text";
import { Heart } from "../components/Heart";
import { useEffect } from "react";

export const WishlistCard = () => {
  const { wishlist, fetchWishlist, handleWishlistSubmit, sortWishlistByDate } =
    useWishStore();

  // const sortWishlistByDate = (wishlist) => {
  //   return wishlist.sort(
  //     (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
  //   );
  // };

  // const sortedWishlist = sortWishlistByDate(wishlist);

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <>
      {wishlist.map((wish) => (
        <div key={wish._id}>
          <Text text={wish.title} />
          <Text text={wish.author} />
          <Text text={wish.message} />
        </div>
      ))}
    </>
  );
};
