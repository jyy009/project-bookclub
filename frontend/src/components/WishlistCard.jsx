import { useWishStore } from "../store/useWishStore";
import { useUserStore } from "../store/useUserStore";
import { Text } from "../atoms/Text";
import { Like } from "./Like";
import { useState, useEffect } from "react";
import { Image } from "../atoms/Image";

export const WishlistCard = () => {
  const { wishlist, fetchWishlist, handleLike, isLastPage } = useWishStore();

  const username = localStorage.getItem("username");

  const [currentPage, setCurrentPage] = useState(1);

  const navigatePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchWishlist(currentPage);
  }, [currentPage]);

  return (
    <div className="">
      <div>
        <button
          onClick={() => navigatePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Image
            link={"./public/icons/chevron-left.svg"}
            imgText={"left arrow"}
          />
        </button>
        <span> Page {currentPage} </span>
        <button
          onClick={() => navigatePage(currentPage + 1)}
          disabled={isLastPage}
        >
          <Image
            link={"./public/icons/chevron-right.svg"}
            imgText={"left arrow"}
          />
        </button>
      </div>
      {isLastPage && (
        <div>
          <p>There are no more books on the wishlist.</p>
        </div>
      )}
      {!isLastPage &&
        wishlist.map((wish) => (
          <div key={wish._id} className="border border-black border-solid">
            <Text text={wish.title} />
            <Text text={wish.author} />
            <Text text={wish.message} />

            {/* <Text text={`submitted by ${wish.user}`}/> */}

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
  );
};
