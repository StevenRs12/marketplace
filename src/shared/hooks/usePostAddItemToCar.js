import { useState } from "react";

export const usePostAddItemToCar = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://itx-frontend-test.onrender.com/api/cart";

  const post = (body) => {
    setIsLoading(true);
    setError(null);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
        localStorage.setItem("carValue", JSON.stringify(data.count));
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  return [data, isLoading, error, post];
};
