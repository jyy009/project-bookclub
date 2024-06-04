import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-primary text-black h-28 md:h-36 lg:h-40 gap-2">
      <Text text={"omcbookclub@omc.omc"} />
      <div className="flex gap-5">
        <a className="cursor-pointer" href="">
          <Image
            link={"/icons/instagram_black.svg"}
            imgText={"instagram icon"}
            section={"h-6"}
          />
        </a>
        <a className="cursor-pointer" href="">
          <Image
            link={"/icons/facebook_black.svg"}
            imgText={"facebook icon"}
            section={"h-6"}
          />
        </a>
      </div>
    </footer>
  );
};
