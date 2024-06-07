import { useWishStore } from "../store/useWishStore";
import { useUserStore } from "../store/useUserStore";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import { useState, useEffect } from "react";

export const WishlistForm = () => {
  const { setWishlist } = useWishStore();

  const { username } = useUserStore();
  const [anon, setAnon] = useState(false);

  const [wishlistData, setWishlistData] = useState({
    title: "",
    author: "",
    message: "",
    user: username,
  });

  const toggleCheckbox = () => {
    setAnon((prevAnon) => !prevAnon);
  };

  const beAnonymous = () => {
    if (anon) {
      setWishlistData((prevState) => ({
        ...prevState,
        user: "Anonymous",
      }));
    } else {
      setWishlistData((prevState) => ({
        ...prevState,
        user: username,
      }));
    }
  };

  const handleWishlistChange = (field, value) => {
    setWishlistData((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleWishlistSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://project-final-rvhj.onrender.com/wishlist",
        {
          method: "POST",
          body: JSON.stringify({
            title: wishlistData.title,
            author: wishlistData.author,
            message: wishlistData.message,
            user: wishlistData.user,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const newWish = result.response;
      console.log("post to API successful:", result);
      setWishlist(newWish);
    } catch (error) {
      console.error("Error posting wish:", error);
      return false;
    } finally {
      setWishlistData({
        title: "",
        author: "",
        message: "",
        user: username,
      });
    }
  };

  useEffect(() => {
    beAnonymous();
  }, [anon]);

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-col gap-2 items-center"
        onSubmit={handleWishlistSubmit}
      >
        <TextInput
          label={"Book title"}
          inputType={"text"}
          inputName={"title"}
          placeholder={"Book title..."}
          value={wishlistData.title}
          onChange={(event) =>
            handleWishlistChange("title", event.target.value)
          }
        />
        <TextInput
          label={"Book author"}
          inputType={"text"}
          inputName={"author"}
          placeholder={"Book author..."}
          value={wishlistData.author}
          onChange={(event) =>
            handleWishlistChange("author", event.target.value)
          }
        />
        <TextInput
          label={"Message"}
          inputType={"text"}
          inputName={"message"}
          placeholder={"Message..."}
          value={wishlistData.message}
          onChange={(event) =>
            handleWishlistChange("message", event.target.value)
          }
        />
        <div>
          <label>
            Anonymous
            <input
              type="checkbox"
              name="anonymous"
              value="Anonymous"
              onChange={toggleCheckbox}
            />
          </label>
        </div>
        <Button type={"submit"} btnText={"Submit"} />
      </form>
    </div>
  );
};
