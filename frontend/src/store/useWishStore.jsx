import { create } from "zustand";

export const useWishStore = create((set, get) => ({
  wishlistData: {
    title: "",
    author: "",
    message: "",
  },

  wishlist: [],

  setWishlist: (newWish) =>
    set((state) => ({ ...state, wishlist: [...state.wishlist, newWish] })),

  sortWishlistByDate: (state) => {
    const { wishlist } = get();
    const sortedWishlist = wishlist.sort(
      (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
    );
    // return { ...state, wishlist: sortedWishlist };
    set((state) => ({ ...state, wishlist: sortedWishlist }));
  },

 

  handleWishlistChange: (field, value) => {
    set((state) => ({
      wishlistData: {
        ...state.wishlistData,
        [field]: value,
      },
    }));
  },

  handleLike: async (event, wishId) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/wishlist/:wishId/like",
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = response.json();
      setWishlist(result.likes);
    } catch (error) {
      console.error("Error posting wish:", error);
      return false;
    }
  },

  handleWishlistSubmit: async (event) => {
    event.preventDefault();
    const { wishlistData, setWishlist, fetchWishlist } = get();

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
      console.log("post to API successful:", result);
  
      setWishlist(result.response);
      console.log("post set to wishlist;", get().wishlist);
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
      fetchWishlist();
    }
  },

  fetchWishlist: async () => {
    const { setWishlist, wishlist, sortWishlistByDate } = get();
    try {
      const response = await fetch("http://localhost:8080/wishlist");

      if (!response.ok) {
        throw new Error("Network reponse was not ok ");
      }

      const data = await response.json();
      // console.log(data);
      set({ wishlist: data });
      console.log("fetched from wishlist;", get().wishlist);
    } catch (error) {
      console.error("Error posting wish:", error);
      return false;
    }
  },
}));
