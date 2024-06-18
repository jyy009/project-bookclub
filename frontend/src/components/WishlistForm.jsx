import { useWishStore } from "../store/useWishStore";
import { useUserStore } from "../store/useUserStore";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import { useState, useEffect } from "react";

const backend_url = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

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
      const response = await fetch(`${backend_url}/wishlist`, {
        method: "POST",
        body: JSON.stringify({
          title: wishlistData.title,
          author: wishlistData.author,
          message: wishlistData.message,
          user: wishlistData.user,
        }),
        headers: { "Content-Type": "application/json" },
      });
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
    <div className="justify-center">
      <form
        className="flex flex-col gap-2 pb-4"
        onSubmit={handleWishlistSubmit}
      >
        <div className={"flex flex-col"}>
          <TextInput
            label={"Text"}
            inputType={"text"}
            inputName={"Title"}
            placeholder={"Book title..."}
            value={wishlistData.title}
            onChange={(event) =>
              handleWishlistChange("title", event.target.value)
            }
            backgroundColor="bg-fourth"
          />
          <TextInput
            label={"Author"}
            inputType={"text"}
            inputName={"Author"}
            placeholder={"Book author..."}
            value={wishlistData.author}
            onChange={(event) =>
              handleWishlistChange("author", event.target.value)
            }
            backgroundColor="bg-fourth"
          />
          <label className="font-josefinsans text-base md:text-lg flex flex-col my-2">
            Message
            <textarea
              name={"Message"}
              placeholder={"Message..."}
              value={wishlistData.message}
              onChange={(event) =>
                handleWishlistChange("message", event.target.value)
              }
              className="bg-fourth font-worksans text-sm border-2 rounded-lg p-2 placeholder-gray-500"
              rows="3"
            ></textarea>
          </label>
        </div>

        <div className={"self-end"}>
          <label className="flex justify-center items-center space-x-2">
            <span className="">Anonymous</span>
            <input
              type="checkbox"
              name="anonymous"
              value="Anonymous"
              onChange={toggleCheckbox}
            />
          </label>
        </div>

        <div className={"self-end"}>
          <Button type={"submit"} btnText={"Submit"} />
        </div>
      </form>
    </div>
  );
};
