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
    set((state) => ({...state, wishlist: sortedWishlist }));

  },

  // setWishlist: (newWish) => {

  //   set((state) => {
  //     const updatedWishlist = [...state.wishlist, newWish];
  //   return {...state, wishlist: updatedWishlist.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) };
  // })},

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
    const { wishlistData, setWishlist, fetchWishlist
    } = get();

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
      // const sortedResult = sortWishlistByDate(result.response);
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
      fetchWishlist()

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
