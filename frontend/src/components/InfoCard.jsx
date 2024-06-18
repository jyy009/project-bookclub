import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { Button } from "../atoms/Button";
import { Link } from "react-router-dom";

export const InfoCard = ({
  imgText,
  imgSrc,
  titleText,
  text,
  button,
  btnText,
  link,
  mdScreen,
}) => {
  return (
    <div
      className={`flex flex-col items-center ${mdScreen} md:mx-8 lg:mx-32 xl:mx-56 md:gap-6 lg:gap-8`}
    >
      <div className="w-full md:w-1/2">
        <Image
          imgText={imgText}
          link={imgSrc}
          section={
            "object-cover w-full h-72 md:h-largeImg object-top md:rounded-lg"
          }
        />
      </div>
      <div className="flex flex-col mx-4 items-center md:mx-0 md:w-1/2 md:self-start md:items-start">
        <Headline titleText={titleText} />
        <Text text={text} />
        <div className="self-center py-4 md:py-0 md:pt-4">
          {button && (
            <Link to={link}>
              <Button
                btnText={btnText}
                buttonStyle={
                  "bg-tertiary px-12 py-2 text-secondary font-josefinsans rounded-md"
                }
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
