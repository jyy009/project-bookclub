import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { useWishStore } from "../store/useWishStore";

export const WishlistNav = ({ sortWishes, navigatePage, currentPage }) => {
  const { isLastPage } = useWishStore();
  return (
    <div className="flex flex-col gap-4 justify-center items-center pt-8">
      <div className="mx-auto">
        <Text text={"Sort by:"} section="text-center" />
        <Button onClick={() => sortWishes("createdAt")} btnText={"Newest"} width={"w-20 md:w24"} />
        <Button onClick={() => sortWishes("likes")} btnText={"Likes"} width={"w-20 md:w24"} />
      </div>

      <div className="flex">
        <Button
          onClick={() => navigatePage(currentPage - 1)}
          disabled={currentPage === 1}
          btnText={<Image link={"./public/icons/chevron-left.svg"} imgText={"left arrow"} />}
          x
        />
        <Text text={`Page ${currentPage}`} />
        <Button
          onClick={() => navigatePage(currentPage + 1)}
          disabled={isLastPage}
          btnText={<Image link={"./public/icons/chevron-right.svg"} imgText={"right arrow"} />}
        />
      </div>
    </div>
  );
};
