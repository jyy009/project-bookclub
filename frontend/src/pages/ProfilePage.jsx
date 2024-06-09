import { useUserStore } from "../store/useUserStore";

export const ProfilePage = () => {
  const { username, userId } = useUserStore();
  console.log(userId);
  return <div>This is {username}'s profile page</div>;
};
