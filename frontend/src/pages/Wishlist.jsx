import { WishlistForm } from "../components/WishlistForm";
import { WishlistCard } from "../components/WishlistCard";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { useUserStore } from "../store/useUserStore";
import { useWishStore } from "../store/useWishStore";
import { useState, useEffect } from "react";
import { WishlistNav } from "../components/WishlistNav";
import { Loading } from "../components/Loading";

export const Wishlist = () => {
  const { isLoggedIn } = useUserStore();
  const { wishlist, fetchWishlist, isLastPage, loading } = useWishStore();
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
        <div className={"flex flex-col items-center mx-auto pb-8"}>
          <div className="flex flex-col justify-center items-center ">
            <Headline section={"py-0 pt-4"} titleText={"Book Wishlist"} />
            <Text section={"pb-2"} text={"Add your book wish!"} />
          </div>
          <div className="w-full max-w-sm mx-auto p-2 md:max-w-lg lg:max-w-3xl">
            <WishlistForm />
            <WishlistNav
              sortWishes={sortWishes}
              navigatePage={navigatePage}
              currentPage={currentPage}
            />
          </div>
          <div className="w-full max-w-sm mx-auto p-2 md:max-w-lg lg:max-w-3xl">
            {isLastPage && (
              <div className="text-center p-12">
                <Text
                  text={
                    "There are no more books on the wishlist. Why don't you add one? 😊"
                  }
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              {!isLastPage && !loading
                ? wishlist.map((wish) => (
                    <WishlistCard
                      key={wish._id}
                      id={wish._id}
                      title={wish.title}
                      author={wish.author}
                      message={wish.message}
                      user={wish.user}
                      likes={wish.likes}
                    />
                  ))
                : ""}
              {loading ? <Loading /> : ""}
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/sign-up" />
      )}
    </>
  );
};
