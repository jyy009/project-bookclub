import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";
import { useUserStore } from "../store/useUserStore";
import { Loading } from "./Loading";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const {
    loginData,
    handleSubmitLogin,
    handleLoginChange,
    backendError,
    errorMessage,
  } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const success = await handleSubmitLogin(event);
    if (success) {
      window.location.href = "/";
    } else {
      console.error("Error logging in");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col py-8 mx-auto w-72 md:w-96"
    >
      <div className="flex flex-col items-center text-center mb-5">
        <p className="font-worksans ">
          <span className="text-2xl md:text-3xl font-josefinsans">
            Welcome back,
          </span>
          <br />
          <span className="md:text-lg">
            let the literary adventures continue!
          </span>
        </p>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="md:mt-4">
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
          <div className="flex justify-center font-worksans text-tertiary">
            {backendError && <p>{errorMessage}</p>}
          </div>
          <div className="flex justify-end mt-3">
            <Button
              type={"submit"}
              btnText={"Sign in"}
              disabled={isLoading}
              buttonStyle="font-josefinsans bg-tertiary text-white px-8 py-1 flex rounded lg md:text-lg"
            />
          </div>
          <div className="mt-8">
            <p className="font-worksans md:mt-4">
              Not a member yet?
              <br />
              Lets join our book club and{" "}
              <Link
                to="/sign-up"
                className="italic underline underline-offset-4 cursor-pointer"
              >
                sign up.
              </Link>
            </p>
          </div>
        </>
      )}
    </form>
  );
};
