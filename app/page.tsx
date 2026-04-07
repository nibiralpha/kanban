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
                  <div className="title">ID - 01</div>
                  <div className="priority">
                    <div className="priority_dot"></div>
                    <div className="priority_text">HIGH</div>
                  </div>
                </div>
                <div className="card_title">Design & Development</div>
                <div className="card_desc">Impliment CRUD on users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
