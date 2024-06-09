import { WishlistForm } from "../components/WishlistForm";
import { WishlistCard } from "../components/WishlistCard";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { useUserStore } from "../store/useUserStore";
import { useWishStore } from "../store/useWishStore";
import { useState, useEffect } from "react";
import { WishlistNav } from "../components/WishlistNav";

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
          <WishlistNav
            sortWishes={sortWishes}
            navigatePage={navigatePage}
            currentPage={currentPage}
          />
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
                id={wish._id}
                title={wish.title}
                author={wish.author}
                message={wish.message}
                user={wish.user}
                likes={wish.likes}
              />
            ))}
        </div>
      ) : (
        <Navigate replace to="/sign-up" /> // This doesn't appear to work. Navigates to "/"
      )}
    </>
  );
};
