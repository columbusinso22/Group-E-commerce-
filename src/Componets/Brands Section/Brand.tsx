import "./Brand.css";
import logogodrej from "../../assets/logo-godrej.png";
import logooppo from "../../assets/logo-oppo.png";
import logococacola from "../../assets/logo-coca-cola.png";
import logopaypal from "../../assets/logo-paypal.png";
import logophilips from "../../assets/logo-philips.png";

const Brand = () => {
  return (
    <div>
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src={logogodrej} />
            </div>
            <div className="col-5">
              <img src={logooppo} />
            </div>
            <div className="col-5">
              <img src={logococacola} />
            </div>
            <div className="col-5">
              <img src={logopaypal} />
            </div>
            <div className="col-5">
              <img src={logophilips} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
