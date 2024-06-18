import { useUserStore } from "../store/useUserStore";
import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";
import { useState } from "react";
import { Loading } from "./Loading";

export const RegisterForm = () => {
  const {
    signUpData,
    handleSubmitForm,
    handleSignUpChange,
    backendError,
    errorMessage,
  } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const success = await handleSubmitForm(event);
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
      className="flex flex-col py-4 mx-auto w-3/4 md:w-1/2 lg:w-2/5"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TextInput
            label={"Full name"}
            inputType={"text"}
            inputName={"fullname"}
            placeholder={"Type your full name"}
            value={signUpData.name}
            onChange={(event) => handleSignUpChange("name", event.target.value)}
          />
          <TextInput
            label={"E-mail"}
            inputType={"email"}
            inputName={"email"}
            requiredPattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder={"Type your e-mail"}
            value={signUpData.email}
            onChange={(event) =>
              handleSignUpChange("email", event.target.value)
            }
          />
          <fieldset>
            <legend className="font-josefinsans md:text-lg">Address</legend>
            <TextInput
              label={"Street"}
              inputType={"text"}
              inputName={"street"}
              placeholder={"Type your street"}
              value={signUpData.street}
              onChange={(event) =>
                handleSignUpChange("street", event.target.value)
              }
            />

            <div className="md:flex md:flex-row md:justify-between">
              <div className="md:w-32">
                <TextInput
                  label={"Post code"}
                  inputType={"text"}
                  inputName={"postcode"}
                  placeholder={"xxx xx"}
                  value={signUpData.postCode.toString()}
                  onChange={(event) =>
                    handleSignUpChange("postCode", event.target.value)
                  }
                />
              </div>

              <div className="md:w-64 xl:w-80">
                <TextInput
                  label={"City"}
                  inputType={"text"}
                  inputName={"city"}
                  placeholder={"Type your city"}
                  value={signUpData.city}
                  onChange={(event) =>
                    handleSignUpChange("city", event.target.value)
                  }
                />
              </div>
            </div>
          </fieldset>
          <TextInput
            label={"Username"}
            inputType={"text"}
            inputName={"username"}
            placeholder={"Type your username"}
            value={signUpData.username}
            onChange={(event) =>
              handleSignUpChange("username", event.target.value)
            }
          />
          <TextInput
            label={"Password"}
            inputType={"password"}
            inputName={"password"}
            placeholder={"Type your password"}
            value={signUpData.password}
            onChange={(event) =>
              handleSignUpChange("password", event.target.value)
            }
          />
          <TextInput
            label={"Verifying password"}
            inputType={"password"}
            inputName={"verifyingPassword"}
            placeholder={"Re-enter your password"}
            value={signUpData.verifyingPassword}
            onChange={(event) =>
              handleSignUpChange("verifyingPassword", event.target.value)
            }
          />
          {backendError && <p className="text-sixth">{errorMessage}</p>}
          <div className="flex justify-end mt-4">
            <Button
              type={"submit"}
              btnText={"Sign up"}
              disabled={isLoading}
              buttonStyle="font-josefinsans bg-tertiary text-white px-8 py-1 flex rounded lg md:text-lg w-32"
            />
          </div>
        </>
      )}
    </form>
  );
};
