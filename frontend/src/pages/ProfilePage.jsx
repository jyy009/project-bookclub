import { useUserStore } from "../store/useUserStore";

export const ProfilePage = () => {
  const { username, isLoggedIn, userId } = useUserStore();
  console.log(isLoggedIn, "userId:", userId);
  return <div>This is {username}'s profile page</div>;
};
