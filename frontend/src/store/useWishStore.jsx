import { create } from "zustand";

const backend_url = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const useWishStore = create((set, get) => ({
  loading: false,
  wishlist: [],
  pageSize: 5,
  isLastpage: false,

  setWishlist: (newWish) =>
    set((state) => ({ ...state, wishlist: [newWish, ...state.wishlist] })),

  updateLikes: (likesData, wishId) => {
    set((state) => ({
      wishlist: state.wishlist.map((wish) =>
        wish._id === wishId ? { ...wish, likes: likesData } : wish
      ),
    }));
  },

  handleLike: async (event, wishId) => {
    event.preventDefault();
    const { updateLikes } = get();
    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("token");

    try {
      const response = await fetch(`${backend_url}/wishlist/like/${wishId}`, {
        method: "POST",
        body: JSON.stringify({ userId }),
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        if (response.status === 400) {
          throw new Error(errorMessage.message);
        } else {
          throw new Error("Network response was not ok");
        }
      }

      const result = await response.json();
      const likesData = result.likes;
      updateLikes(likesData, wishId);
    } catch (error) {
      console.error("Error updating likes:", error);
      return {
        success: false,
        message: error.message || "Failed to update likes.",
      };
    }
  },

  fetchWishlist: async (page, sortField) => {
    set({ loading: true });
    const { pageSize } = get();

    try {
      const response = await fetch(
        `${backend_url}/wishlist?page=${page}&pageSize=${pageSize}&sortField=${sortField}`
      );

      if (!response.ok) {
        set({ isLastPage: true });
        throw new Error("Network reponse was not ok ");
      }

      const data = await response.json();
      set({ wishlist: data, isLastPage: false });
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      set({ isLastPage: true });

      return false;
    } finally {
      set({ loading: false });
    }
  },
}));
