import CardComponent from "./Components/Card/CardComponent";

export default function Home() {
  return (
    <div className="container">
      <div className="top_margin">
        <div className="row">
          <div className="col-3">
            <div className="inner_column">
              <div className="header">
                <div className="backlog">Backlog</div>
                <div className="plus">+</div>
              </div>
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
