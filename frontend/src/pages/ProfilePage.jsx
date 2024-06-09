import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";

export const ProfilePage = () => {
  const { username, userUrl } = useUserStore();
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState({});

  const fetchProfile = async (id) => {
    try {
      const response = await fetch(`${userUrl}/${id}`);
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
  }, [userId]);

  return (
    <div>
      This is {username}'s profile page
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Address: {userData.address}</p>
    </div>
  );
};
