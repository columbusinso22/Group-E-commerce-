import "./Testimonial.css";
import  {FaStar }from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div>
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <FaQuoteLeft className="fa fa-quote-left"/>
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, facere illum! Corporis tempora tenetur molestias
                error? Labore laboriosam libero perferendis maxime, atque
                dolores ullam! Atque.
              </p>
              <div className="rating">
                <FaStar className="fa fa-star" />
                <FaStar className="fa fa-star" />
                <FaStar className="fa fa-star" />
                <IoMdStarHalf className="fa fa-star" />
              </div>
              <img src="/src/assets/user-1.png" alt="Sean Parker" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
            <FaQuoteLeft className="fa fa-quote-left"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, facere illum! Corporis tempora tenetur molestias
                error? Labore laboriosam libero perferendis maxime, atque
                dolores ullam! Atque.
              </p>
              <div className="rating">
              <FaStar className="fa fa-star" />
                <FaStar className="fa fa-star" />
                  <FaStar className="fa fa-star" />
                    <FaStar className="fa fa-star" />
                      <IoMdStarHalf className="fa fa-star" />
              </div>
              <img src="/src/assets/user-2.png" alt="Miko Smith" />
              <h3>Miko Smith</h3>
            </div>
            <div className="col-3">
               <FaQuoteLeft className="fa fa-quote-left"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, facere illum! Corporis tempora tenetur molestias
                error? Labore laboriosam libero perferendis maxime, atque
                dolores ullam! Atque.
              </p>
              <div className="rating">
               <FaStar className="fa fa-star" />
                <FaStar className="fa fa-star" />
                  <FaStar className="fa fa-star" />
                    <FaStar className="fa fa-star" />
                      <IoMdStarHalf className="fa fa-star" />
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
