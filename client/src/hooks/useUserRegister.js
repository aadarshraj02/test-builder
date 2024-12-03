import axios from "axios";
import { useState } from "react";

const useUserRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (newUser) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/users/register`,
        newUser
      );

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

export default useUserRegister;
