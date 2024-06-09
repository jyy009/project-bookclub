import { useWishStore } from "../store/useWishStore";
import { useUserStore } from "../store/useUserStore";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import { useState, useEffect } from "react";

export const WishlistForm = () => {
  const { wishlistUrl, setWishlist } = useWishStore();

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
        wishlistUrl,
        //"http://localhost:8080/wishlist",
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

  const renderTextInput = (label, name, placeholder) => (
    <TextInput
      label={label}
      inputType="text"
      inputName={name}
      placeholder={placeholder}
      value={wishlistData[name]}
      onChange={(event) => handleWishlistChange(name, event.target.value)}
      inputStyle="pl-2 bg-fourth placeholder-gray-500 rounded-lg"
      labelStyle="flex flex-col"
    />
  );

  return (
    <div className="justify-center border border-black ">
      <form
        className="flex flex-col  gap-2  border border-black pb-4"
        onSubmit={handleWishlistSubmit}
      >
        <div className={"flex flex-col gap-2 border border-blue-500"}>
          {renderTextInput("Title", "title", "Book title...")}
          {renderTextInput("Author", "author", "Book author...")}
          {renderTextInput("Message", "message", "Message...")}
        </div>

        <div className={"mx-auto border border-red-600"}>
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

        <div className={"border border-green-600 mx-auto"}>
          <Button
            buttonStyle={
              "bg-tertiary px-12 py-2 text-secondary font-josefinsans md:text-xl rounded-md"
            }
            type={"submit"}
            btnText={"Submit"}
          />
        </div>
      </form>
    </div>
  );
};
