import { useUserStore } from "../store/useUserStore";
import { Headline } from "../atoms/Headline";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";
import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";

export const NotFound = () => {
  const { isLoggedIn } = useUserStore();
  console.log("is logged in:", isLoggedIn);

  return (
    <section className="h-full">
      <div className="flex flex-col items-center mx-4 md:mx-12 lg:mx-32 py-7 md:py-6  gap-6 md:gap-8 lg:gap-0">
        <Headline titleText={"The page you were looking for doesn't exist."} />
        <Image
          link={"/images/empty_book.jpg"}
          imgText={"Empty book"}
          section={
            "object-cover w-full md:max-h-96 md:max-w-4xl rounded-lg lg:mb-8"
          }
        />
        {!isLoggedIn ? (
          <Text text={"Please sign in and try again."} />
        ) : (
          <Text text={"Please try again."} />
        )}
        <Link to={"/"}>
          <Button
            btnText={"Back to Home"}
            buttonStyle={
              "bg-tertiary px-8 py-2 lg:my-4 text-secondary font-josefinsans rounded-md"
            }
          />
        </Link>
      </div>
    </section>
  );
};
