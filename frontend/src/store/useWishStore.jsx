import { create } from "zustand";

export const useWishStore = create((set, get) => ({
  wishlistData: {
    title: "",
    author: "",
    message: "",
    user: "",
  },

  wishlist: [],

  isChecked: false,

  setIsChecked: () => {
    set((state) => ({ isChecked: !state.isChecked }))
    console.log("anonymous status", get().isChecked)
},
// setIsChecked: (newValue) => {
//   set({ isChecked: newValue })
//   console.log("anonymous status", get().isChecked)
// },

  setWishlist: (newWish) =>
    set((state) => ({ ...state, wishlist: [newWish, ...state.wishlist] })),


  handleWishlistChange: (field, value) => {
    set((state) => ({
      wishlistData: {
        ...state.wishlistData,
        [field]: value,
      },
    }));
  },

  updateLikes: (likesData, wishId) => {
    set((state) => ({wishlist: state.wishlist.map((wish) => wish._id === wishId ? {...wish, likes: likesData} : wish )}))
  },

  handleLike: async (event, wishId) => {
    event.preventDefault();
    const { updateLikes } = get()

    try {
      const response = await fetch(
        `http://localhost:8080/wishlist/${wishId}/like`,
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const likesData = result.likes
      console.log("likes data:", likesData)

      updateLikes(likesData, wishId)
      console.log("updated wishlist with like:", get().wishlist)

    } catch (error) {
      console.error("Error posting like:", error);
      return false;
    }
  },

  fetchWishlist: async () => {
    try {
      const response = await fetch("http://localhost:8080/wishlist");

      if (!response.ok) {
        throw new Error("Network reponse was not ok ");
      }

      const data = await response.json();
      console.log(data);
            console.log("wishlist before setting;", get().wishlist);

      set({ wishlist: data });
      console.log("wishlist after setting;", get().wishlist);
    } catch (error) {
      console.error("Error posting wish:", error);
      return false;
    }
  },

  handleWishlistSubmit: async (event) => {
    event.preventDefault();
    const { wishlistData, setWishlist, isChecked } = get();

    const formData = {
      title: wishlistData.title,
          author: wishlistData.author,
          message: wishlistData.message,
          user: isChecked
    }
    try {
      const response = await fetch("http://localhost:8080/wishlist", {
        method: "POST",
        body: JSON.stringify(
          formData
        ),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      const newWish = result.response
      console.log("post to API successful:", result);
      console.log("before post set to wishlist;", get().wishlist);
      setWishlist(newWish);
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
          user: false
        },
      });
    }
  },
}));
