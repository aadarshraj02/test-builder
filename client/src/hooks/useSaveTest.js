import { useState } from "react";
import axios from "axios";

const useSaveTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveTestData = async (testData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/tests/create`,
        testData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Test saved successfully!");
      window.location.href = "/";
    } catch (err) {
      setError("Error saving test data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { saveTestData, isLoading, error };
};

export default useSaveTest;
