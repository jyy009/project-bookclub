import { useWishStore } from "../store/useWishStore";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import { WishlistCard } from "./WishlistCard";

export const WishlistForm = () => {
  const { wishlistData, handleWishlistChange, handleWishlistSubmit } =
    useWishStore();

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
        <Button type={"submit"} btnText={"Submit"} />
      </form>
    </div>
  );
};
