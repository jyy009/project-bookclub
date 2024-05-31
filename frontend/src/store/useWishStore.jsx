import { create } from "zustand";

export const useWishStore = create(set => ({
  wishlistData: {
    title: "",
    author: "",
    message: ""
  },

  handleWishlistChange: (event) => {
    event.preventDefault()
  }
}))
