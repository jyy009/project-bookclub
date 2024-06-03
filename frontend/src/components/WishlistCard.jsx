import { useWishStore } from "../store/useWishStore";
import { Text } from "../atoms/Text";
import { Heart } from "../components/Heart";
import { useEffect } from "react";

export const WishlistCard = () => {
  const { wishlist, fetchWishlist } = useWishStore();

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
    <div className="">
      {wishlist.map((wish) => (
        <div key={wish._id} className="border border-black border-solid">
          <Text text={wish.title} />
          <Text text={wish.author} />
          <Text text={wish.message} />
          <Heart emoji="❤️" label="heart" onClick={null} likes={wish.hearts} />
        </div>
      ))}
    </div>
  );
};
