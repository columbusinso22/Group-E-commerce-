import "./Serve.css";
import exclusiveImage from "../../assets/exclusive.png";

const Serve = () => {
  return (
    <div>
      <section className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={exclusiveImage} className="offer-img" />
            </div>
            <div className="col-2">
              <p>exclusive Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLID color full-touch display with adjustable brightness, so
                everything is clear as can be
              </small>
              <a href="" className="btn">
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Serve;
