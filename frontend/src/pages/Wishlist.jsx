import { WishlistForm } from "../components/WishlistForm";
import { WishlistCard } from "../components/WishlistCard";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { useUserStore } from "../store/useUserStore";
import { useWishStore } from "../store/useWishStore";
import { useState, useEffect } from "react";

export const Wishlist = () => {
  const { isLoggedIn } = useUserStore();
  const { wishlist, fetchWishlist, isLastPage } = useWishStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("createdAt");

  const navigatePage = (page) => {
    setCurrentPage(page);
  };

  const sortWishes = (sort) => {
    setSortField(sort);
  };

  useEffect(() => {
    fetchWishlist(currentPage, sortField);
  }, [currentPage, sortField]);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <Headline titleText={"Book Wishlist"} />
          <Text text={"What book would you like to read next?"} />
          <WishlistForm />
          <div className="flex justify-between">
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
            <div>
              <p className="px-4">Sort by:</p>
              <button onClick={() => sortWishes("createdAt")} className="px-4">
                Newest
              </button>
              <button onClick={() => sortWishes("likes")} className="px-4">
                Likes
              </button>
            </div>
          </div>
          {isLastPage && (
            <div className="text-center p-12">
              <Text
                text={
                  "There are no more books on the wishlist. Why don't you add one? 😊"
                }
              />
            </div>
          )}
          {!isLastPage &&
            wishlist.map((wish) => (
              <WishlistCard
                key={wish._id}
                title={wish.title}
                author={wish.author}
                message={wish.message}
                user={wish.user}
                id={wish._id}
                likes={wish.likes}
              />
            ))}
        </div>
      ) : (
        <Navigate replace to="/sign-up" />
      )}
    </>
  );
};
