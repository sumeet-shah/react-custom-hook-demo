import useGetUsers from "../custom-hooks/use-getUsers";
import ListUsersAnimated from "./ListUserAnimate";
import ListUserData from "./ListUserData";

function UserDataContainer({ page }) {
  const [error, isLoading, data] = useGetUsers(page);
  return (
    <>
      {isLoading && <ListUsersAnimated count={3} />}

      {error.isError && (
        <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
      )}

      {data && data.length === 0 && (
        <div class="alert alert-danger" role="alert">
          No data was found!!!
        </div>
      )}

      {!isLoading && !error.isError && <ListUserData userData={data} />}
    </>
  );
}

export default UserDataContainer;
