import { useWishStore } from "../store/useWishStore";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import { useState, useEffect } from "react"

export const WishlistForm = () => {
  const { wishlistData, handleWishlistChange, handleWishlistSubmit, isChecked, setIsChecked } =
    useWishStore();
  
  // const [isChecked, setIsChecked] = useState(false)

  // const handleIsChecked = (event) => {
  //   setIsChecked(event.target.checked)
    
  // }

  // useEffect(() => {
  //   console.log("checkbox status", isChecked)
  // }, [isChecked])

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
        <label>
          <input 
          type="checkbox"
          name="user"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
          />
          anonymous

        </label>
        <Button type={"submit"} btnText={"Submit"} />
      </form>
    </div>
  );
};
