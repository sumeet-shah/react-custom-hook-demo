function ListUsersAnimated({ count }) {
  const prepareHtml = () => {
    const rows = [];

    for (let index = 0; index < count; index++) {
      rows.push(
        <div key={index} className="col-sm-3 m-4">
          <div className="card" aria-hidden="true">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>

            <div className="card-body">
              <div className="h5 card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </div>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="row justify-content-md-center">
      {prepareHtml().map((x) => x)}
    </div>
  );
}

export default ListUsersAnimated;
