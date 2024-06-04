import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { Button } from "../atoms/Button";

export const BookClub = () => {
  return (
    <section className="bg-secondary py-7 md:py-10 lg:py-36">
      <div className="flex flex-col items-center md:flex-row md:mx-8 lg:mx-32">
        <Image
          imgText={"Books and magazines on a sheet"}
          link={"/images/giulia-bertelli-y7rGTFyOzxc-unsplash.jpg"}
          section={"max-h-80"}
        />
        <div className="mx-4 md:mx-0">
          <Headline titleText={"Discover your next favorite book with us!"} />
          <Text
            text={
              "Welcome to the ultimate book club for every genre enthusiast! Each month, we handpick a captivating book from a different genre—be it mystery, romance, sci-fi, fantasy, or non-fiction—ensuring there's always something new to explore. Join our community of avid readers to dive into diverse stories, share your thoughts in engaging discussions, and broaden your literary horizons. Let us embark this literary adventure through the vast world of books!"
            }
          />
          <Button btnText={"Sign Up"} />
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row-reverse md:mx-8 lg:mx-32">
        <Image
          imgText={"Person reading a book"}
          link={"/images/image.png"}
          section={"max-h-80"}
        />

        <div className="mx-4 md:mx-0">
          <Headline titleText={"Monthly Literary Delights Await!"} />
          <Text
            text={
              "As a member of our book club, you can look forward to receiving a carefully selected book each month, delivered to your doorstep. We choose from a wide range of genres to keep your reading experience fresh and exciting. Expect thrilling mysteries, heartfelt romances, thought-provoking non-fiction, and more."
            }
          />
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:mx-8 lg:mx-32">
        <Image
          imgText={
            "Person holding an open book, confetti coming out of the book"
          }
          link={"/images/woman-6318447_640.jpg"}
          section={"max-h-80"}
        />
        <div className="mx-4 md:mx-0">
          <Headline titleText={"Book wishlist"} />
          <Text
            text={
              "Our Wishlist feature allows members to suggest titles they'd love to explore with the club. Whether it's a timeless classic, an exciting new release, or a hidden gem from any genre, your recommendations help us curate selections that resonate with our diverse community."
            }
          />
        </div>
      </div>
    </section>
  );
};
