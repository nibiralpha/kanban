export default function Home() {
  return (
    <div className="container">
      <div className="top_margin">
        <div className="row">
          <div className="col-3">
            <div className="inner-column">
              <div className="header">
                <div className="backlog">Backlog</div>
                <div className="plus">+</div>
              </div>
              <div className="card">
                <div className="title_area">
                  <div className="title">ID - 100</div>
                  {/* <div className="priority">Hight</div> */}
                </div>
                <div className="description">Design & Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
