import "./Brand.css";

const Brand = () => {
  return (
    <div>
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src="/src/assets/logo-godrej.png" alt="Godrej Logo" />
            </div>
            <div className="col-5">
              <img src="/src/assets/logo-oppo.png" alt="Oppo Logo" />
            </div>
            <div className="col-5">
              <img src="/src/assets/logo-coca-cola.png" alt="Coca Cola Logo" />
            </div>
            <div className="col-5">
              <img src="/src/assets/logo-paypal.png" alt="Paypal Logo" />
            </div>
            <div className="col-5">
              <img src="/src/assets/logo-philips.png" alt="Philips Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
