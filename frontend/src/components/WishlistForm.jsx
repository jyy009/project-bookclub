import { useWishStore } from "../store/useWishStore"
import { TextInput } from "../atoms/TextInput";

export const WishlistForm = () => {

  const { wishlistData } = useWishStore()

  return (
<div className="flex flex-col">
  <form className="flex flex-col gap-2" onSubmit={null}>
    <TextInput 
    label={"Book title"}
      inputType={"text"}
      inputName={"title"}
      placeholder={"Book title..."}
      value={wishlistData.title}
      onChange={null}
      />
      <TextInput 
    label={"Book author"}
      inputType={"text"}
      inputName={"author"}
      placeholder={"Book author..."}
      value={wishlistData.author}
      onChange={null}
      />
      <TextInput 
    label={"Book title"}
      inputType={"text"}
      inputName={"title"}
      placeholder={"Book title..."}
      value={wishlistData.title}
      onChange={null}
      />
  </form>
  
</div>
  )
   
};
