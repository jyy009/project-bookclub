import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { FounderCard } from "../components/FounderCard";
import founders from "../components/founders.json";

export const AboutUs = () => {
  const introParaOne =
    "Our Book Club was founded by three lifelong friends and passionate readers: Emily, Jack, and Sarah. United by their love for literature and a desire to share this passion with others, they set out to create a welcoming community where book lovers could connect and engage.";
  const introParaTwo =
    "Together, Emily, Jack, and Sarah have built a book club that not only celebrates great books but also the friendships and connections that grow from a shared love of reading. Join us and become part of our story!";

  const ourFounders = founders;

  return (
    <section className="bg-cream text-jeans text-justify">
      <div className="mx-4">
        <div className="flex flex-col gap-4 pt-7 items-center">
          <Headline titleText={"Our Story"} />
          <Text text={introParaOne} />
          <Text text={introParaTwo} />
          <Headline titleText={"Meet the founders"} />
        </div>
      </div>
      <div className="flex overflow-x-auto gap-8 text-left py-7 mx-1">
        {ourFounders.map((founder, index) => (
          <FounderCard key={index} founder={founder} />
        ))}
      </div>
    </section>
  );
};
