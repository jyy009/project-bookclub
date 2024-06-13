import { Button } from "../atoms/Button";
import { Image } from "../atoms/Image";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

export const Landing = () => {
  const { isLoggedIn } = useUserStore();

  return (
    <div className="bg-secondary flex justify-center items-center">
      <div className="flex flex-col py-8 md:grid md:grid-cols-2 md:px-8 lg:px-0 md:max-w-screen-md xl:max-w-3xl 2xl:max-w-4xl">
        <Image link={"/images/landing-image.jpg"} imgText={"girl reading book"} />

        <div className="flex flex-col md:col-span-1 gap-6  md:px-8 text-center px-2">
          <Headline titleText={"Discover your next favorite book with us"} />
          {!isLoggedIn ? (
            <>
              <Text
                text={
                  "Whether you’re a fan of gripping thrillers, heartwarming romances, or thought-provoking non-fiction, our book club offers something for everyone. Connect with fellow book lovers, engage in lively discussions, and discover new favourites each month. "
                }
              />
              <div className="flex justify-center mt-4">
                <Link to="/sign-up">
                  <Button btnText={"Sign up"} />
                </Link>
              </div>{" "}
            </>
          ) : (
            <>
              <Text text={`Have you found a book you want to read and share with others?`} />
              <Text text={`Share it in the Wishlist!`} />
              <Text text={`It can be a timeless classic, an exciting new release or a hidden gem of any genre.`} />
              <div className="flex justify-center mt-4">
                <Link to="/wishlist">
                  <Button btnText={"Wishlist"} />
                </Link>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

("");
