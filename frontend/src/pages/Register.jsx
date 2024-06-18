import { RegisterForm } from "../components/RegisterForm";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";

export const Register = () => {
  return (
    <div className="flex flex-col py-8 mx-auto">
      <div className="flex flex-col mx-auto text-center mb-5 w-3/4 md:w-1/2 lg:w-2/5">
        <Headline titleText={"Sign up"} />
        <div>
          <Text
            text={"Love to read and want to meet fellow book enthusiasts?"}
          />
          <Text
            text={
              "Register now for our OMC Book Club and dive into lively discussions, discover new genres, and share your favorite reads!"
            }
          />
        </div>
      </div>
      <RegisterForm />
    </div>
  );
};
