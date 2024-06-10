import { RegisterForm } from "../components/RegisterForm";
import { Headline } from "../atoms/Headline";

export const Register = () => {
  return (
    <div className="flex flex-col py-8 mx-auto">
      <div className="flex flex-col mx-auto text-center mb-5 w-3/4">
        <Headline titleText={"Sign up"} />
        <div>
          <p className="md:text-lg pb-2">Love to read and want to meet fellow book enthusiasts?</p>
          <p className="md:text-lg">
            Register now for our OMC Book Club and dive into lively discussions, discover new genres, and share your
            favorite reads!
          </p>
        </div>
      </div>
      <RegisterForm />
    </div>
  );
};
