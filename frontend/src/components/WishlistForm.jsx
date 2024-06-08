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

  const renderTextInput = (label, name, placeholder) => (
    <TextInput
      label={label}
      inputType="text"
      inputName={name}
      placeholder={placeholder}
      value={wishlistData[name]}
      onChange={(event) => handleWishlistChange(name, event.target.value)}
      inputStyle="pl-2 bg-fourth placeholder-gray-500"
      labelStyle="flex flex-col"
    />
  );

  return (
    // <div className="flex flex-col border border-black">
    <form
      className="flex flex-col gap-2 px-3 border border-black"
      onSubmit={handleWishlistSubmit}
    >
      <div className={"flex flex-col gap-2 border border-blue-500 "}>
        {/* <TextInput
              label={"Title"}
              inputType={"text"}
              inputName={"title"}
              placeholder={"Book title..."}
              value={wishlistData.title}
              onChange={(event) =>
                handleWishlistChange("title", event.target.value)
              }
              inputStyle={"pl-2 bg-fourth placeholder-gray-500"}
              labelStyle={"flex flex-col"}
            />
            <TextInput
              label={"Author"}
              inputType={"text"}
              inputName={"author"}
              placeholder={"Book author..."}
              value={wishlistData.author}
              onChange={(event) =>
                handleWishlistChange("author", event.target.value)
              }
              inputStyle={"pl-2 bg-fourth placeholder-gray-500"}
              labelStyle={"flex flex-col"}
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
              inputStyle={"pl-2 bg-fourth placeholder-gray-500"}
              labelStyle={"flex flex-col"}
            /> */}
        {renderTextInput("Title", "title", "Book title...")}
        {renderTextInput("Author", "author", "Book author...")}
        {renderTextInput("Message", "message", "Message...")}
      </div>

      <div className={"border border-red-600"}>
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

      <div className={"border border-red-600"}>
        <Button
          buttonStyle={
            "bg-tertiary px-12 py-2 text-secondary font-josefinsans md:text-xl rounded-md"
          }
          type={"submit"}
          btnText={"Submit"}
        />
      </div>
    </form>
    // </div>
  );
};
