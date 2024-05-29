import { SignIn } from "../components/SignIn";
import { Register } from "./Register";

export const Home = () => {
  return (
    <div>
      <Register />
      <SignIn />
    </div>
  );
};
