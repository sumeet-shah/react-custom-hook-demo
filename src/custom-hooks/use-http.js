import { useCallback, useState } from "react";

/**custom hook to place http requst */
function useHttp() {
  console.log("🚀 ~ file: use-http.js ~ line 5 ~ useHttp ~ useHttp called!!");
  // tells the calling component if the current http request is still loading or done loading
  const [isLoading, setIsLoading] = useState(false);

  //   tells the calling component if the current http request has any error if so what it the error message?
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  //   final data
  const [data, setData] = useState([]);

  //   we want to give the ability to the caller to initiate/trigger the http request call.

  const callHttp = useCallback(async (request, processDatafn) => {
    setIsLoading(true);
    setError({});

    console.log(
      "🚀 ~ file: use-http.js ~ line 45 ~ callHttp ~ callHttp called!!"
    );

    const response = await fetch(request.url, {
      body: request.body ? JSON.stringify(request.body) : null,
      headers: request.headers ?? {},
      method: request.method ?? "GET",
    });

    setIsLoading(false);

    console.log(
      "🚀 ~ file: use-http.js ~ line 37 ~ callHttp ~ response.ok",
      response.ok
    );
    if (response.ok === false) {
      // in case of some error
      setError({
        isError: true,
        message: response.statusText,
      });
      return;
    }

    const data = await response.json();
    const updatedData = processDatafn(data);
    console.log(
      "🚀 ~ file: use-http.js ~ line 51 ~ callHttp ~ updatedData",
      updatedData
    );
    setData(updatedData);
  }, []);

  //   returning the state data to the caller component.
  return { isLoading, error, data, callHttp };
}

export default useHttp;
