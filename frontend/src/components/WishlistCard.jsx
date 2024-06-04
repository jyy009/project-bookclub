import { useWishStore } from "../store/useWishStore";
import { Text } from "../atoms/Text";
import { Like } from "./Like";
import { useEffect } from "react";

export const WishlistCard = () => {
  const { wishlist, fetchWishlist, handleLike } = useWishStore();



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
          <Like 
            emoji="❤️" 
            label="heart" 
            onClick={(event) => handleLike(event, wish._id)} 
            likes={wish.likes} 
          />
        </div>
      ))}
    </div>
  );
};
