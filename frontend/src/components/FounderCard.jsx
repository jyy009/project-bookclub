import { Headline } from "../atoms/Headline";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";

export const FounderCard = ({ founder }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-52">
        <Image
          link={founder.imageUrl}
          imgText={founder.altText}
          section={"rounded-full inset-0 w-full object-cover w-52 h-52"}
        />
      </div>
      <Headline titleText={founder.name} />
      <Text text={founder.text} />
    </div>
  );
};
