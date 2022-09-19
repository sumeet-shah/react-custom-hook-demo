import { useState } from "react";
import "./App.css";
import UserDataContainer from "./Components/UserDataContainer";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="container p-5 h-100">
      <UserDataContainer page={page} />

      <div className="row justify-content-md-center">
        <button
          type="button"
          onClick={() => {
            let p = page + 1;
            setPage(p);
          }}
          className="btn btn-primary col-2"
        >
          Fetch user data
        </button>
      </div>
    </div>
  );
}

export default App;
