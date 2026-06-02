import "./Header.css";
import menu from "../../assets/menu.png";
import logo from "../../assets/image.png";
import cart from "../../assets/cart.png";
import productImage from "../../assets/image1.png";

const Header = () => {
  return (
    <div>
      <section className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={logo} style={{ width: "125px" }} />
            </div>

            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Product</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Account</a>
                </li>
              </ul>
            </nav>
            <img src={cart} width="30px" height="30px" />
            <img src={menu} className="menu-icon" />
          </div>
          <div>
            <div className="row">
              <div className="col-1">
                <h1>
                  Give Your Workout <br />A New Style
                </h1>
                <p>
                  Success isn't always about greatness. it's about consistency.
                  consistent <br />
                  hard work gains success. Greatness will come.
                </p>
                <a href="" className="btn">
                  Explore Now &#8594;
                </a>
              </div>
              <div className="col-2">
                <img src={productImage} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
