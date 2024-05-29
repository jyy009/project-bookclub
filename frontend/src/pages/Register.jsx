import { RegisterForm } from "../components/RegisterForm";
import { Headline } from "../atoms/Headline";

export const Register = () => {
  return (
    <div>
      <div>
        <Headline titleText={"Register"} />
        <div>
          <p>Love to read and want to meet fellow book enthusiasts?</p>
          <p>
            Register now for our OMC Book Club and dive into lively discussions,
            discover new genres, and share your favorite reads!
          </p>
        </div>
      </div>
      <RegisterForm />
    </div>
  );
};
