import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, facere illum! Corporis tempora tenetur molestias
                error? Labore laboriosam libero perferendis maxime, atque
                dolores ullam! Atque.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="/src/assets/user-1.png" alt="Sean Parker" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, facere illum! Corporis tempora tenetur molestias
                error? Labore laboriosam libero perferendis maxime, atque
                dolores ullam! Atque.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="/src/assets/user-2.png" alt="Miko Smith" />
              <h3>Miko Smith</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, facere illum! Corporis tempora tenetur molestias
                error? Labore laboriosam libero perferendis maxime, atque
                dolores ullam! Atque.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="/src/assets/user-3.png" alt="Mabol Joe" />
              <h3>Mabol Joe</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
