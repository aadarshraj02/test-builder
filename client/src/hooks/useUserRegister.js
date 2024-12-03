import { useState } from "react";
import axios from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (newUser) => {
    setLoading(true);
    setError(null);

    try {
      const response =
        (await axios.post) <
        SignupResponse >
        (`${import.meta.env.VITE_BASE_URL}/api/users/register`, newUser);

      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    }
  };

  return { signup, loading, error };
};

export default useSignup;
