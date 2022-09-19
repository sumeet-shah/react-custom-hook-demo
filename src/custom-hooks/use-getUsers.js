import { useEffect, useState } from "react";

export default function useGetUsers(pageId = 2) {
  console.log(
    "🚀 ~ file: use-getUsers.js ~ line 4 ~ useGetUsers ~ pageId",
    pageId
  );
  const [error, setError] = useState({ isError: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchingData = async () => {
      setIsLoading(true);
      setData([{}]);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageId}&limit=6`
      );
      setIsLoading(false);
      if (response.ok === false) {
        setIsLoading(false);
        setError({
          isError: true,
          message: response.statusText,
        });
        return;
      }

      const data = await response.json();
      setData(data);
    };

    try {
      fetchingData();
    } catch (error) {
      setIsLoading(false);
      setError({
        isError: true,
        message: error.message,
      });
    }
  }, [pageId]);

  return [error, isLoading, data];
}
