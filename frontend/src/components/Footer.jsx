import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-primary text-black h-20 md:h-28 gap-2">
      <Text text={"omcbookclub@omc.omc"} />
      <div className="flex gap-5 px-4 md:px-8 lg:px-32 xl:px-56">
        <a className="cursor-pointer" href="">
          <Image link={"/icons/instagram_black.svg"} imgText={"instagram icon"} section={"h-6"} />
        </a>
        <a className="cursor-pointer" href="">
          <Image link={"/icons/facebook_black.svg"} imgText={"facebook icon"} section={"h-6"} />
        </a>
      </div>
    </footer>
  );
};
