import { Button } from "../atoms/Button";
import { Headline } from "../atoms/Headline";
import { TextInput } from "../atoms/TextInput";
import { useUserStore } from "../store/useUserStore";
import { useState } from "react";

export const SignIn = () => {
  const { loginData, handleSubmitLogin, handleLoginChange } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await handleSubmitLogin(event);
      // Redirect to /logged-in after successful login
      window.location.href = "/logged-in";
    } catch (error) {
      console.error("Error logging in", error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label={"Username"}
          inputType={"text"}
          inputName={"username"}
          placeholder={"Type your username"}
          value={loginData.username}
          onChange={(event) =>
            handleLoginChange("username", event.target.value)
          }
        />

        <TextInput
          label={"Password"}
          inputType={"password"}
          inputName={"password"}
          placeholder={"Type your password"}
          value={loginData.password}
          onChange={(event) =>
            handleLoginChange("password", event.target.value)
          }
        />
      </div>
      <Button type={"submit"} btnText={"Log in"} disabled={isLoading} />
    </form>
  );
};
