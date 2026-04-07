import CardComponent from "./Components/Card/CardComponent";

export default function Home() {
  return (
    <div className="container">
      <div className="top_margin">
        <div className="row">
          <div className="col-3">
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
