import { create } from "zustand";

const backend_url = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const useUserStore = create((set, get) => ({
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

  loginData: {
    username: "",
    password: "",
  },

  accessToken: "",
  username: "",
  isLoggedIn: false,
  backendError: false,
  errorMessage: "",
  showMenu: false,

  toggleMenu: () => set((state) => ({ showMenu: !state.showMenu })),

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
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("isLoggedIn");
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
    const emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
    const validEmail = new RegExp(emailPattern).test(signUpData.email);
    if (!validEmail) {
      set((state) => ({
        ...state,
        errorMessage: "Please use a valid email address",
      }));
      return false;
    }

    if (signUpData.password !== signUpData.verifyingPassword) {
      set((state) => ({
        ...state,
        errorMessage: "Password doesn't match",
      }));
      return false;
    }
    try {
      const response = await fetch(`${backend_url}/users`, {
        method: "POST",
        body: JSON.stringify({
          name: signUpData.name,
          username: signUpData.username,
          email: signUpData.email,
          password: signUpData.password,
          address: constructedAddress,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        if (errorResponse.errorType === "password") {
          set((state) => ({
            ...state,
            backendError: true,
            errorMessage: "Password must be at least 8 characters long",
          }));
        }
        if (errorResponse.errorType === "duplication") {
          if (errorResponse.message === "username") {
            set((state) => ({
              ...state,
              backendError: true,
              errorMessage: "An account with that username already exists",
            }));
          }
          if (errorResponse.message === "email") {
            set((state) => ({
              ...state,
              backendError: true,
              errorMessage: "An account with that email already exists",
            }));
          }
        }
        return false;
      } else {
        const result = await response.json();
        set((state) => ({
          ...state,
          accessToken: result.accessToken,
          username: signUpData.username,
          userId: result.userId,
        }));
        const updatedAccessToken = get().accessToken;
        const updatedUsername = get().signUpData.username;
        const updatedUserId = get().userId;
        localStorage.setItem("token", updatedAccessToken);
        localStorage.setItem("username", updatedUsername);
        localStorage.setItem("userId", updatedUserId);

        return true;
      }
    } catch (error) {
      set((state) => ({
        ...state,
        backendError: true,
        errorMessage:
          "Unable to sign up, try again or contact us by email if this issue persists.",
      }));
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
      const response = await fetch(`${backend_url}/users/sessions`, {
        method: "POST",
        body: JSON.stringify({
          username: loginData.username,
          password: loginData.password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        set((state) => ({
          ...state,
          backendError: true,
          errorMessage: "Incorrect username or password",
        }));
        return false;
      } else {
        const result = await response.json();
        set((state) => ({
          ...state,
          accessToken: result.accessToken,
          username: loginData.username,
          userId: result.userId,
        }));
        const updatedAccessToken = get().accessToken;
        const updatedUsername = get().loginData.username;
        const updatedUserId = get().userId;

        localStorage.setItem("token", updatedAccessToken);
        localStorage.setItem("username", updatedUsername);
        localStorage.setItem("userId", updatedUserId);
        set({
          loginData: {
            username: "",
            password: "",
          },
        });
        return true;
      }
    } catch (error) {
      set((state) => ({
        ...state,
        backendError: true,
        errorMessage:
          "Unable to sign up, try again or contact us by email if this issue persists.",
      }));
      return false;
    }
  },

  validateLoggedInData: async (accessToken) => {
    try {
      const response = await fetch(`${backend_url}/users/membership`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const result = await response.json();
        localStorage.setItem("isLoggedIn", result.isLoggedIn);
        set((state) => ({ ...state, isLoggedIn: result.isLoggedIn }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
