import api from "./api";

// Signup user
export const signup = async (user) => {
  return api.post("/auth/signup", user);
};

// Signin user
export const signin = async (user) => {
  return api.post("/auth/signin", user);
};
