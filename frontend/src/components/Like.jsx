import { useWishStore } from "../store/useWishStore";
import { useState } from "react";

export const Like = ({ likes, id }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { handleLike } = useWishStore();

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const errorObj = await handleLike(event, id);
      if (errorObj && !errorObj.success) {
        setErrorMessage(errorObj.message);
        return;
      }
      setIsClicked(!isClicked);
    } catch (error) {
      console.error("Error updating post:", error);
      setErrorMessage("Failed to update likes.");
    }
  };

  return (
    <>
      <div className="flex flex-row">
        {errorMessage && (
          <div className="text-red-500 px-4">{errorMessage}</div>
        )}
        <button onClick={handleClick}>
          <img
            src={isClicked ? "../icons/red-like.svg" : "../icons/blue-like.svg"}
            alt="thumbs up button"
            className="h-5 w-5 mr-2 lg:h-6 lg:w-6"
          />
        </button>
        <span className="md:text-lg lg:text-xl">x{likes}</span>
      </div>
    </>
  );
};
