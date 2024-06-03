import { create } from "zustand";

export const useWishStore = create((set, get) => ({
  wishlistData: {
    title: "",
    author: "",
    message: "",
  },

  wishlist: [],

  // setWishlistData: (newTitle, newAuthor, newMessage) =>
  //   set({
  //     wishlistData: {
  //       title: newTitle,
  //       author: newAuthor,
  //       message: newMessage,
  //     }
  //   }),

  setWishlist: (newWish) =>
    set((state) => ({ ...state, wishlist: [...state.wishlist, newWish] })),

  handleWishlistChange: (field, value) => {
    set((state) => ({
      wishlistData: {
        ...state.wishlistData,
        [field]: value,
      },
    }));
  },

  handleWishlistSubmit: async (event) => {
    event.preventDefault();
    const { wishlistData, wishlist, setWishlist } = get();

    try {
      const response = await fetch("http://localhost:8080/wishlist", {
        method: "POST",
        body: JSON.stringify({
          title: wishlistData.title,
          author: wishlistData.author,
          message: wishlistData.message,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      setWishlist(result.response);
      console.log("posted to wishlist;", get().wishlist);
    } catch (error) {
      console.error("Error posting wish:", error);
      return false;
    } finally {
      set({
        wishlistData: {
          title: "",
          author: "",
          message: "",
        },
      });
    }
  },

  fetchWishlist: async () => {
    const { setWishlist } = get();
    try {
      const response = await fetch("http://localhost:8080/wishlist");

      if (!response.ok) {
        throw new Error("Network reponse was not ok ");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error posting wish:", error);
      return false;
    }
  },
}));
