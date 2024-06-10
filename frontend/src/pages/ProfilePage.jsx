import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { Headline } from "../atoms/Headline";
import { Text } from "../atoms/Text";

const backend_url = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const ProfilePage = () => {
  const { username } = useUserStore();
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState({});

  const fetchProfile = async (id) => {
    try {
      const response = await fetch(`${backend_url}/users/${id}`);
      if (!response.ok) {
        throw new Error("Profile response was not ok");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchProfile(userId);
  }, []);

  return (
    <div className="mx-4 md:mx-8 lg:mx-32 py-7 md:py-10 lg:py-36 flex flex-col gap-4 items-center">
      <Headline titleText={`${username}`} />
      <div className="flex flex-col gap-2 p-6 shadow">
        <Text text={`Name: ${userData.name}`} />
        <Text text={`Email: ${userData.email}`} />
        <Text text={`Address: ${userData.address}`} />
      </div>
    </div>
  );
};
