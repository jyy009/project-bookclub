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
        <div className="flex gap-4">
          <Button
            onClick={() => sortWishes("createdAt")}
            btnText={"Newest"}
            width={"w-24 md:w-28"}
          />
          <Button
            onClick={() => sortWishes("likes")}
            btnText={"Likes"}
            width={"w-24 md:w-28"}
          />
        </div>
      </div>

      <div className="flex">
        <Button
          onClick={() => navigatePage(currentPage - 1)}
          disabled={currentPage === 1}
          btnText={
            <Image link={"/icons/chevron-left.svg"} imgText={"left arrow"} />
          }
          btnStyle={"bg-secondary hover:bg-secondary"}
          width={"w-13"}
          x
        />
        <Text text={`Page ${currentPage}`} />
        <Button
          onClick={() => navigatePage(currentPage + 1)}
          disabled={isLastPage}
          btnText={
            <Image link={"/icons/chevron-right.svg"} imgText={"right arrow"} />
          }
          btnStyle={"bg-secondary hover:bg-secondary"}
          width={"w-13"}
        />
      </div>
    </div>
  );
};
