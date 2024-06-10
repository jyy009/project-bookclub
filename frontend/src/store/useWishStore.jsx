import { create } from "zustand";
import { Loading } from "../components/Loading";

const backend_url = import.meta.env.BACKEND_URL || "http://localhost:8080";

export const useWishStore = create((set, get) => ({
  loading: false,

  wishlist: [],

  pageSize: 5,
  isLastpage: false,
  setWishlist: (newWish) => set((state) => ({ ...state, wishlist: [newWish, ...state.wishlist] })),


  updateLikes: (likesData, wishId) => {
    set((state) => ({
      wishlist: state.wishlist.map((wish) => (wish._id === wishId ? { ...wish, likes: likesData } : wish)),
    }));
  },

  handleLike: async (event, wishId) => {
    event.preventDefault();
    const { updateLikes } = get();

    try {

      const response = await fetch(`${backend_url}/wishlist/${wishId}/like`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const likesData = result.likes;
      console.log("likes data:", likesData);

      updateLikes(likesData, wishId);
      console.log("updated wishlist with like:", get().wishlist);
    } catch (error) {
      console.error("Error posting like:", error);
      return false;
    }
  },


  fetchWishlist: async (page, sortField) => {
    set({ loading: true });
    const { pageSize } = get();

    try {
      const response = await fetch(`${backend_url}/wishlist?page=${page}&pageSize=${pageSize}&sortField=${sortField}`);

      if (!response.ok) {
        set({ isLastPage: true });
        throw new Error("Network reponse was not ok ");
      }

      const data = await response.json();
      set({ wishlist: data, isLastPage: false });
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      return false;
    } finally {
      set({ loading: false });
    }
  },
}));
