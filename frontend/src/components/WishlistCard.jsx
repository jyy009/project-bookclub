import { useWishStore } from "../store/useWishStore";
import { Loading } from "../components/Loading";
import { Text } from "../atoms/Text";
import { Like } from "./Like";
import { useState, useEffect } from "react";

export const WishlistCard = () => {
  const { wishlist, fetchWishlist, handleLike, loading } =
    useWishStore();


  useEffect(() => {    
    fetchWishlist();

  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="">
          {wishlist.map((wish) => (
            <div key={wish._id} className="border border-orange-700">
              <Text text={wish.title} />
              <Text text={wish.author} />
              <Text text={wish.message} />

              <Text text={wish.user} />
              <Like
                emoji="❤️"
                label="heart"
                onClick={(event) => handleLike(event, wish._id)}
                likes={wish.likes}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
