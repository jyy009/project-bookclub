import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { Carousel } from "../components/Carousel";
import { FounderCard } from "../components/FounderCard";
import { Image } from "../atoms/Image";
import founders from "../components/founders.json";

export const AboutUs = () => {
  const introParaOne =
    "Our Book Club was founded by three lifelong friends and passionate readers: Emily, Jack, and Sarah. United by their love for literature and a desire to share this passion with others, they set out to create a welcoming community where book lovers could connect and engage.";
  const introParaTwo =
    "Together, Emily, Jack, and Sarah have built a book club that not only celebrates great books but also the friendships and connections that grow from a shared love of reading. Join us and become part of our story!";

  const contactUs =
    "We’d love to hear from you! Whether you have questions, suggestions, or just want to share your thoughts, feel free to reach out. Contact us at [email address] and we’ll get back to you as soon as possible. Happy reading!";

  const ourFounders = founders;

  return (
    <section className="bg-secondary text-black ">
      <div className="mx-4 md:mx-8 lg:mx-32 py-7 md:py-10 lg:py-36 flex flex-col gap-4 items-center">
        <Headline titleText={"Our Story"} />
        <Text text={introParaOne} />
        <Text text={introParaTwo} />
        <Headline titleText={"Meet the founders"} />

        <div className="md:hidden flex justify-center max-w-sm">
          <Carousel>
            {ourFounders.map((founder, index) => (
              <FounderCard key={index} founder={founder} />
            ))}
          </Carousel>
        </div>

        <div className="hidden md:flex md:gap-10 lg:justify-between w-full">
          {ourFounders.map((founder, index) => (
            <FounderCard key={index} founder={founder} />
          ))}
        </div>

        <div className="flex flex-col items-center md:flex-row md:gap-6 lg:gap-10">
          <div className="max-w-md">
            <Image
              link={"../public/images/letter.png"}
              imgText={"Envelope"}
              section={"object-cover"}
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:self-start">
            <Headline titleText={"Get in touch!"} />
            <Text text={contactUs} />
          </div>
        </div>
      </div>
    </section>
  );
};
