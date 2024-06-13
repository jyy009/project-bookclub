import { InfoCard } from "../components/InfoCard";
import { useUserStore } from "../store/useUserStore";
import bookClubInfo from "../components/bookClubInfo.json";

export const BookClub = () => {
  const { isLoggedIn } = useUserStore();
  const loggedOutInfo = bookClubInfo[0].loggedOutInfo;
  const loggedInInfo = bookClubInfo[0].loggedInInfo;

  return (
    <section className="flex flex-col gap-6 lg:gap-10 py-12">
      <InfoCard
        imgText={
          isLoggedIn
            ? loggedInInfo.sectionOne.imageText
            : loggedOutInfo.sectionOne.imageText
        }
        imgSrc={
          isLoggedIn
            ? loggedInInfo.sectionOne.imgSrc
            : loggedOutInfo.sectionOne.imgSrc
        }
        titleText={
          isLoggedIn
            ? loggedInInfo.sectionOne.heading
            : loggedOutInfo.sectionOne.heading
        }
        text={
          isLoggedIn
            ? loggedInInfo.sectionOne.text
            : loggedOutInfo.sectionOne.text
        }
        button={isLoggedIn ? false : true}
        mdScreen={"md:flex-row"}
        btnText={"Sign Up"}
        link={"/sign-up"}
      />
      <InfoCard
        imgText={"Person sitting on top of a stack of book"}
        imgSrc={
          isLoggedIn
            ? loggedInInfo.sectionTwo.imgSrc
            : loggedOutInfo.sectionTwo.imgSrc
        }
        titleText={
          isLoggedIn
            ? loggedInInfo.sectionTwo.heading
            : loggedOutInfo.sectionTwo.heading
        }
        text={
          isLoggedIn
            ? loggedInInfo.sectionTwo.text
            : loggedOutInfo.sectionTwo.text
        }
        button={false}
        mdScreen={"md:flex-row-reverse"}
      />
      <InfoCard
        imgText={"Person holding an open book, confetti coming out of the book"}
        imgSrc={"/images/woman-6318447_640.jpg"}
        titleText={
          isLoggedIn
            ? loggedInInfo.sectionThree.heading
            : loggedOutInfo.sectionThree.heading
        }
        text={
          isLoggedIn
            ? loggedInInfo.sectionThree.text
            : loggedOutInfo.sectionThree.text
        }
        button={isLoggedIn ? true : false}
        mdScreen={"md:flex-row"}
        btnText={"Wishlist"}
        link={"/wishlist"}
      />
    </section>
  );
};
