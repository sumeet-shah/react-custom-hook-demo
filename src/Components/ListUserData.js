function ListUserData({ userData }) {
  console.log(
    "🚀 ~ file: ListUserData.js ~ line 2 ~ ListUserData ~ userData",
    userData
  );

  return (
    <div className="row justify-content-md-center my-3">
      {!userData ? (
        <div class="alert alert-info" role="alert">
          No data was found!!
        </div>
      ) : (
        <>
          {userData.map((x) => {
            return (
              <div className="col-3 m-1">
                <div className="card shadow-lg bg-white rounded">
                  <img
                    src={x.download_url}
                    className="card-img-top img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className={"card-title"}>{x.author}</h5>
                    <p className={"card-text"}>
                      <div className="col">
                        <a
                          href={x.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {x.url}
                        </a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ListUserData;
