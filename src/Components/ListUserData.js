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
              <div
                key={x.url}
                className="col-sm-6 col-md-4 col-xl-3 col-xxl-2  m-1"
              >
                <div className="shadow-lg bg-white rounded img--card p-3">
                  <div className="img--container">
                    <div className="col">
                      <a href={x.url} target="_blank" rel="noopener noreferrer">
                        <img
                          src={x.download_url}
                          className="img--smart"
                          alt="..."
                        />
                      </a>
                    </div>
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
