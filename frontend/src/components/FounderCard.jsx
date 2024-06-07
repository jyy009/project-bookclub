import { Headline } from "../atoms/Headline";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";

export const FounderCard = ({ founder }) => {
  return (
    <div className="flex flex-col items-center box-border lg:max-w-96">
      <div className="flex justify-center">
        <Image
          link={founder.imageUrl}
          imgText={founder.altText}
          section={"rounded-full inset-0 object-cover w-52 h-52"}
        />
      </div>
      <Headline titleText={founder.name} />
      <Text text={founder.text} />
    </div>
  );
};
