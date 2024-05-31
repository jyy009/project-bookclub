import { WishlistForm } from "../components/WishlistForm";
import { WishlistCard } from "../components/WishlistCard";
import { Headline } from "../atoms/Headline"
import { Text } from "../atoms/Text"

export const Wishlist = () => {

  return (
    <div>
      <Headline titleText={"Book Wishlist"}/>
      <Text 
      text={"Submit your book wishes and be a part of the selection process. Your suggestions can introduce fellow members to new authors, fresh perspectives, and unforgettable stories. Let's create a reading list that reflects the interests and passions of our vibrant book club. Share your wishlist today and let’s embark on literary adventures together!"}
      />
      
        <WishlistForm />
        <WishlistCard />
        
      
     
    </div>
  );
};
