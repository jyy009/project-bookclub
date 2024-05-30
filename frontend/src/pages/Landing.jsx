import { Header } from "../components/Header";
import { Image } from "../atoms/Image";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
// import { Button } from "../atoms/Button"
import { Link } from "react-router-dom"

export const Landing = () => {
  return (
    <div>
      <Header />
      <div>
        <Image
          link={"/images/pexels-merve-bayar-158520570-10863551.jpg"}
          imgText={"man sitting on books"}
          section={"hero-image"}
        />
      </div>
      <div>
        <Headline titleText={"Discover your next favorite books with us"} />
        <Text
          text={
            "Whether you’re a fan of gripping thrillers, heartwarming romances, or thought-provoking non-fiction, our book club offers something for everyone. Connect with fellow book lovers, engage in lively discussions, and discover new favourites each month. "
          }
        />
        <Link to="/sign-up">Sign Up</Link>
        </div>
    </div>
  );
};
