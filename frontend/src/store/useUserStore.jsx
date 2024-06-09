import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  // TODO Breakout this to a useEffect in the sign-up component, this is so that we dont accidentally expose the username/password from any other page/component in the frontend
  signUpData: {
    name: "",
    email: "",
    street: "",
    postCode: "",
    city: "",
    username: "",
    password: "",
    verifyingPassword: "",
  },

  // TODO Breakout this to a useEffect in the sign-in component, this is so that we dont accidentally expose the username/password from any other page/component in the frontend
  loginData: {
    username: "",
    password: "",
  },

  accessToken: "",
  username: "",
  isLoggedIn: false,
  userId: "",

  // TODO create function that takes key and value as input and updates keys here in zustand.
  setData: (key, value) => {
    set({ [key]: value });
  },

  resetSignUpData: () =>
    set({
      signUpData: {
        name: "",
        email: "",
        street: "",
        postCode: "",
        city: "",
        username: "",
        password: "",
        verifyingPassword: "",
      },
    }),

  resetLoginData: () => {
    set({
      loginData: {
        username: "",
        password: "",
      },
    });
  },

  // removes accesstoken and username from localstorage and resets/empties the data in zustand when the user sign out.
  signOut: () => {
    console.log('Signing out...');
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    set({
      accessToken: "",
      username: "",
      isLoggedIn: false,
    });
  },

  handleSubmitForm: async (event) => {
    event.preventDefault();

    const { signUpData } = get();
    const constructedAddress = `${signUpData.street} ${signUpData.postCode} ${signUpData.city}`;

    if (signUpData.password !== signUpData.verifyingPassword) {
      console.error("Passwords do not match");
      return false;
    }
    try {
      const response = await fetch(
        //"https://project-final-rvhj.onrender.com/users",
        "http://localhost:8080/users",
        {
          method: "POST",
          body: JSON.stringify({
            name: signUpData.name,
            username: signUpData.username,
            email: signUpData.email,
            password: signUpData.password,
            address: constructedAddress,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Backend error:", errorResponse.message || errorResponse);
      }
      const result = await response.json();
      console.log(result);
      set((state) => ({ ...state, accessToken: result.accessToken }));
      const updatedAccessToken = get().accessToken;
      const updatedUsername = get().signUpData.username;
      localStorage.setItem("token", JSON.stringify(updatedAccessToken));
      localStorage.setItem("username", JSON.stringify(updatedUsername));


      return true;
    } catch (error) {
      console.error("Error adding new user:", error);
      return false;
    }
  },

  handleSignUpChange: (fieldName, value) => {
    set((state) => ({
      signUpData: {
        ...state.signUpData,
        [fieldName]: value,
      },
    }));
  },

  handleLoginChange: (fieldName, value) => {
    set((state) => ({
      loginData: {
        ...state.loginData,
        [fieldName]: value,
      },
    }));
  },

  handleSubmitLogin: async (event) => {
    event.preventDefault();
    const { loginData } = get();
    try {
      const response = await fetch(
        //"https://project-final-rvhj.onrender.com/users/sessions",
        "http://localhost:8080/users/sessions",
        {
          method: "POST",
          body: JSON.stringify({
            username: loginData.username,
            password: loginData.password,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      set((state) => ({
        ...state,
        accessToken: result.accessToken,
        userId: result.userId,
        username: loginData.username,
      }));
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("userId", result.userId);
      localStorage.setItem("username", loginData.username);
      set({
        loginData: {
          username: "",
          password: "",
        },
      });
    } catch (error) {
      console.error("Error logging in", error);
    }
  },

  validateLoggedInData: async (accessToken) => {
    try {
      const response = await fetch(
        // "https://project-final-rvhj.onrender.com/users/membership",
        "http://localhost:8080/users/membership",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const result = await response.json();
        console.log(result.isLoggedIn);
        set((state) => ({
          ...state,
          isLoggedIn: result.isLoggedIn,
          userId: result.userId,
        }));
        localStorage.setItem("isLoggedIn", result.isLoggedIn);
        localStorage.setItem("userId", result.userId);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
