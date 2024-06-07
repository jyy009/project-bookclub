import { InfoCard } from "../components/InfoCard";

export const BookClub = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 py-8 md:py-10 lg:py-36 xl:py-32">
      <InfoCard
        imgText={"Books and magazines on a sheet"}
        imgSrc={"/images/giulia-bertelli-y7rGTFyOzxc-unsplash.jpg"}
        titleText={"Discover your next favorite book with us!"}
        text={
          "Welcome to the ultimate book club for every genre enthusiast! Each month, we handpick a captivating book from a different genre—be it mystery, romance, sci-fi, fantasy, or non-fiction—ensuring there's always something new to explore. Join our community of avid readers to dive into diverse stories, share your thoughts in engaging discussions, and broaden your literary horizons. Let us embark this literary adventure through the vast world of books!"
        }
        button={true}
        rowDirection={"flex-row"}
      />
      <InfoCard
        imgText={"Person reading a book"}
        imgSrc={"/images/image.png"}
        titleText={"Monthly Literary Delights Await!"}
        text={
          "As a member of our book club, you can look forward to receiving a carefully selected book each month, delivered to your doorstep. We choose from a wide range of genres to keep your reading experience fresh and exciting. Expect thrilling mysteries, heartfelt romances, thought-provoking non-fiction, and more."
        }
        button={false}
        rowDirection={"flex-row"}
      />
      <InfoCard
        imgText={"Person holding an open book, confetti coming out of the book"}
        imgSrc={"/images/woman-6318447_640.jpg"}
        titleText={"Book wishlist"}
        text={
          "Our Wishlist feature allows members to suggest titles they'd love to explore with the club. Whether it's a timeless classic, an exciting new release, or a hidden gem from any genre, your recommendations help us curate selections that resonate with our diverse community."
        }
        button={false}
        rowDirection={"flex-row"}
      />
    </section>
  );
};
