import { useEffect } from "react";
import useHttp from "../custom-hooks/use-http";
import ListUsersAnimated from "./ListUserAnimate";
import ListUserData from "./ListUserData";

function UserDataContainer({ page }) {
  // const [error, isLoading, data] = useGetUsers(page);
  const { isLoading, error, data, callHttp } = useHttp();

  useEffect(() => {
    callHttp(
      {
        url: `https://picsum.photos/v2/list?page=${page}&limit=10`,
      },
      (data) => {
        console.log(
          "🚀 ~ file: UserDataContainer.js ~ line 16 ~ useEffect ~ data",
          data
        );
        return data;
      }
    );
  }, [callHttp, page]);

  return (
    <>
      {isLoading && <ListUsersAnimated count={3} />}

      {error.isError && (
        <div class="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}

      {data && data.length === 0 && (
        <div className="alert alert-danger" role="alert">
          No data was found!!!
        </div>
      )}

      {!isLoading && !error.isError && <ListUserData userData={data} />}
    </>
  );
}

export default UserDataContainer;
