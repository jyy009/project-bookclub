import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { TextInput } from "../atoms/TextInput";
import { ProfileCard } from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";

const backend_url = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const ProfilePage = () => {
  const { username, signOut } = useUserStore();
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState({});
  const [updateCount, setUpdateCount] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [updateData, setUpdateData] = useState({
    street: "",
    postCode: "",
    city: "",
  });
  const [isFetchingProfile, setIsFetchingProfile] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const navigate = useNavigate();

  const fetchProfile = async (id) => {
    setIsFetchingProfile(true);
    try {
      const response = await fetch(`${backend_url}/users/${id}`);
      if (!response.ok) {
        throw new Error("Profile response was not ok");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setIsFetchingProfile(false);
    }
  };

  const submitUpdateAddress = async (event) => {
    event.preventDefault();
    const fullUpdatedAddress = `${updateData.street} ${updateData.postCode} ${updateData.city}`;
    try {
      const response = await fetch(`${backend_url}/users/${userId}/update`, {
        method: "PATCH",
        body: JSON.stringify({
          address: fullUpdatedAddress,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Patching response was not ok");
      } else {
        const result = await response.json();
        setUpdateCount((prevCount) => prevCount + 1);
        setUpdateData({ street: "", postCode: "", city: "" });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const toggleHidden = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleUpdateChange = (fieldName, value) => {
    setUpdateData((prevUpdateData) => ({
      ...prevUpdateData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    fetchProfile(userId);
  }, [userId, updateCount]);

  const handleDelete = async (event, userId) => {
    try {
      const response = await fetch(`${backend_url}/users/delete/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("delete response failed");
      }
      const data = await response.json();
      console.log("user deleted", data);
      setDeleteUser(true);
      signOut();
      navigate("/");
    } catch (error) {
      console.error("Error deleting profile", error);
    }
  };

  const confirmDelete = () => {
    setShowConfirmation(true);
    setConfirmationMessage(
      "Are you sure you want to delete your subscription?"
    );
  };

  return (
    <>
      {isFetchingProfile ? (
        <Loading />
      ) : (
        <div className="flex flex-col max-w-sm mx-auto p-2 items-center pb-8 gap-6 lg:gap-4 md:max-w-md lg:max-w-2xl md:pb-10 lg:pb-36">
          <Headline titleText={`${username}`} section="" />
          <div className="flex flex-col">
            <div className="mb-4 rounded-md py-6 bg-fourth p-2">
              <ProfileCard
                name={userData.name}
                email={userData.email}
                address={userData.address}
              />
            </div>
            <div className="flex flex-col items-center md:items-start gap-4 lg:gap-6">
              <Text
                text={
                  "Have you recently moved and are worried the books won't reach you at your new place? Don't worry! Click here to update your address."
                }
                section="text-center md:text-left"
              />
              <Button
                onClick={toggleHidden}
                btnText={"Update address"}
                width={"w-40 md:w-44"}
              />
              {!hidden && (
                <form
                  onSubmit={submitUpdateAddress}
                  className=" md:w-64 xl:w-80"
                >
                  <fieldset className="flex flex-col gap-6">
                    <div>
                      <TextInput
                        label={"Street"}
                        inputType={"text"}
                        inputName={"street"}
                        placeholder={"Type your street"}
                        value={updateData.street}
                        onChange={(event) =>
                          handleUpdateChange("street", event.target.value)
                        }
                      />
                      <div className="md:flex md:flex-row md:justify-between">
                        <div className="md:w-32">
                          <TextInput
                            label={"Post code"}
                            inputType={"text"}
                            inputName={"postcode"}
                            placeholder={"xxx xx"}
                            value={updateData.postCode}
                            onChange={(event) =>
                              handleUpdateChange("postCode", event.target.value)
                            }
                          />
                        </div>
                        <div className="md:w-64 xl:w-80">
                          <TextInput
                            label={"City"}
                            inputType={"text"}
                            inputName={"city"}
                            placeholder={"Type your city"}
                            value={updateData.city}
                            onChange={(event) =>
                              handleUpdateChange("city", event.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div className="flex justify-center mt-4 md:justify-start">
                    <Button type={"submit"} btnText={"Update"} />
                  </div>
                </form>
              )}
            </div>
            <div className="flex flex-col items-center md:items-start gap-6 mt-16">
              <>
                <div className="flex flex-col gap-4">
                  <Text text={"Delete account?"} />
                  <Button
                    btnText={"Delete"}
                    onClick={(event) => confirmDelete(event)}
                    type="submit"
                  />
                </div>
                {showConfirmation && (
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <Text
                      section="text-center md:text-left"
                      text={confirmationMessage}
                    />
                    <div className="flex flex-row gap-4">
                      <Button
                        onClick={() => setShowConfirmation(false)}
                        btnText="No"
                        width={"w-13"}
                      />
                      <Button
                        onClick={(event) => handleDelete(event, userId)}
                        btnText="Yes"
                        width={"w-13"}
                      />
                    </div>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
