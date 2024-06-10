import { useWishStore } from "../store/useWishStore";
import { Text } from "../atoms/Text";
import { Like } from "./Like";

export const WishlistCard = ({ id, title, author, message, user, likes }) => {
  const { handleLike } = useWishStore();

  return (
    <div className="border border-orange-700 bg-fourth rounded-lg">
      <Text text={title} />
      <Text text={author} />
      <Text text={message} />

      <Text text={user} />
      <Like
        imageUrl={
          likes > 0 ? "../icons/heartred.svg" : "../icons/heartblue.svg"
        }
        label="heart"
        onClick={(event) => handleLike(event, id)}
        likes={likes}
      />
    </div>
  );
};
