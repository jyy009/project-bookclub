import { useWishStore } from "../store/useWishStore";
import { Loading } from "../components/Loading";
import { Text } from "../atoms/Text";
import { Like } from "./Like";
import { useState, useEffect } from "react";

export const WishlistCard = () => {
  const { wishlist, fetchWishlist, handleLike, loading, updateLikes } =
    useWishStore();


  useEffect(() => {    
    fetchWishlist();

  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-4">
          {wishlist.map((wish) => (
            <div key={wish._id} className="border border-orange-700 bg-fourth rounded-lg">
              <Text text={wish.title} />
              <Text text={wish.author} />
              <Text text={wish.message} />

              <Text text={`by ${wish.user}`} />
              <Like
                imageUrl={wish.likes > 0 ? "../icons/heartred.svg" : "../icons/heartblue.svg"}
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
