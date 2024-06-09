import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { useWishStore } from "../store/useWishStore";

export const WishlistNav = ({ sortWishes, navigatePage, currentPage }) => {
  const { isLastPage } = useWishStore();
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <Button
          onClick={() => navigatePage(currentPage - 1)}
          disabled={currentPage === 1}
          btnText={
            <Image
              link={"./public/icons/chevron-left.svg"}
              imgText={"left arrow"}
            />
          }x
        />
        <Text text={`Page ${currentPage}`} />
        <Button
          onClick={() => navigatePage(currentPage + 1)}
          disabled={isLastPage}
          btnText={
            <Image
              link={"./public/icons/chevron-right.svg"}
              imgText={"right arrow"}
            />
          } 
        />
      </div>
      <div className="">
        <Text text={"Sort by:"} />
        <Button
          onClick={() => sortWishes("createdAt")}
          btnText={"Newest"}
          buttonStyle={
            "bg-tertiary px-4 py-1 text-secondary font-josefinsans rounded-md mr-2"
          }
        />
        <Button
          onClick={() => sortWishes("likes")}
          btnText={"Likes"}
          buttonStyle={
            "bg-tertiary px-4 py-1 text-secondary font-josefinsans rounded-md"
          }
        />
      </div>
    </div>
  );
};
