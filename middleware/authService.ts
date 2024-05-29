import Cookies from "js-cookie";
import axios from "axios";

const TOKEN_COOKIE_NAME = "jwtTokenLoggedIn";

export const login = async (
  username: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      username,
      password,
    });
    const { token } = response.data;
    setAuthToken(token);
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

export const register = async (
  name: string,
  username: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await axios.post("http://localhost:3000/register", {
      name,
      username,
      password,
    });
    const { token } = response.data;
    setAuthToken(token);
    return true;
  } catch (error) {
    console.error("Register failed:", error);
    return false;
  }
};

export const logout = () => {
  Cookies.remove(TOKEN_COOKIE_NAME);
};

export const setAuthToken = (token: string) => {
  // Cookies.set(TOKEN_COOKIE_NAME, token, { secure: true, sameSite: "strict" });
  Cookies.set(TOKEN_COOKIE_NAME, token, {});
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const getAuthToken = (): string | undefined => {
  return Cookies.get(TOKEN_COOKIE_NAME);
};
