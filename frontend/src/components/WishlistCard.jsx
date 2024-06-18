import { Text } from "../atoms/Text";
import { Like } from "./Like";

export const WishlistCard = ({ id, title, author, message, user, likes }) => {
  return (
    <div className="flex flex-col bg-fourth rounded-md w-full p-2">
      <div className="">
        <Text text={title} />
        <Text text={author} />
        <Text text={message} />
        <div className="flex flex-row pt-4 justify-between place-items-start">
          <Text text={`by ${user}`} />
          <Like id={id} likes={likes} />
        </div>
      </div>
    </div>
  );
};
