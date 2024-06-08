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
        <div className="bg-secondary flex flex-col border border-black py-8 md:grid md:grid-cols-2 md:py-10 md:px-8 lg:py-36 xl:py-32 md:max-w-screen-md">
            <Image
            link={"/images/landingImage.svg"}
            imgText={"girl reading book"}
            section={"md:w-fit"}
          />
          
          <div className="flex flex-col md:col-span-1 gap-6  md:px-8 lg:gap-10 text-center border border-black ">
            <Headline titleText={"Discover your next favorite book with us"} />
            <Text
              text={
                "Whether you’re a fan of gripping thrillers, heartwarming romances, or thought-provoking non-fiction, our book club offers something for everyone. Connect with fellow book lovers, engage in lively discussions, and discover new favourites each month. "
              }
            />
          {!isLoggedIn && (
            <Link to="/sign-up">
              <Button
                btnText={"Sign up"}
                buttonStyle={
                  "bg-tertiary px-12 py-2 text-secondary font-josefinsans md:text-xl rounded-md"
                }
              />
            </Link>
          )}
            
          </div>
        </div>
        </div>
      )}


