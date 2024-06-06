import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";
import { useUserStore } from "../store/useUserStore";
import { useState, useEffect } from "react";

export const SignIn = () => {
  const { loginData, handleSubmitLogin, handleLoginChange } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await handleSubmitLogin(event);
      // Redirect to landing-page after successful login
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging in", error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="my-6">
      <div className="flex flex-col items-center text-center mb-5">
        <p className="font-worksans">
          Welcome back,
          <br />
          let the literary adventures continue!
        </p>
      </div>
      <div>
        <TextInput
          label={"Username"}
          inputType={"text"}
          inputName={"username"}
          placeholder={"Type your username"}
          value={loginData.username}
          onChange={(event) => handleLoginChange("username", event.target.value)}
          labelStyle="font-josefinsans text-base flex flex-col mx-3 my-2"
          inputStyle="font-worksans text-sm border-2 rounded-lg p-1"
        />

        <TextInput
          label={"Password"}
          inputType={"password"}
          inputName={"password"}
          placeholder={"Type your password"}
          value={loginData.password}
          onChange={(event) => handleLoginChange("password", event.target.value)}
          labelStyle="font-josefinsans text-base flex flex-col mx-3 my-2"
          inputStyle="font-worksans text-sm border-2 rounded-lg p-1"
        />
      </div>
      <div className="flex justify-end mr-3 mt-3">
        <Button
          type={"submit"}
          btnText={"Sign in"}
          disabled={isLoading}
          buttonStyle="font-josefinsans bg-jeans text-cream px-6 py-1 flex rounded lg"
        />
      </div>
    </form>
  );
};
