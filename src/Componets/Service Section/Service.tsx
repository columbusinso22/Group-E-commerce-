import "./Service.css";

// 1. Import Category Images
import category1 from "../../assets/category-1.png";
import category2 from "../../assets/category-2.png";
import category3 from "../../assets/category-3.png";

// 2. Import Product Images
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import product4 from "../../assets/product-4.png";
import product5 from "../../assets/product-5.png";
import product6 from "../../assets/product-6.png";
import product7 from "../../assets/product-7.png";
import product8 from "../../assets/product-8.png";
import product9 from "../../assets/product-9.png";
import product10 from "../../assets/product-10.png";
import product11 from "../../assets/product-11.png";
import product12 from "../../assets/product-12.png";

// Define interfaces cleanly at the top level
interface Category {
  id: number;
  image: string;
}

interface Product {
  id: number;
  image: string;
  name: string;
  ratingStars: string[];
  price: string;
}

export default function Service() {
  // Categories Data Array using imported variables
  const categories: Category[] = [
    { id: 1, image: category1 },
    { id: 2, image: category2 },
    { id: 3, image: category3 },
  ];

  // Featured Products Data Array using imported variables
  const featuredProducts: Product[] = [
    {
      id: 1,
      image: product1,
      name: "Red Printed T-shirt",
      ratingStars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
      price: "$50.00",
    },
    {
      id: 2,
      image: product2,
      name: "Red Printed T-shirt",
      ratingStars: [
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star-half-o",
        "fa-star-o",
      ],
      price: "$50.00",
    },
    {
      id: 3,
      image: product3,
      name: "Red Printed T-shirt",
      ratingStars: [
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star-half-o",
      ],
      price: "$50.00",
    },
    {
      id: 4,
      image: product4,
      name: "Red Printed T-shirt",
      ratingStars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
      price: "$50.00",
    },
  ];

  // Latest Products Data Array using imported variables
  const latestProducts: Product[] = [
    {
      id: 5,
      image: product5,
      name: "Red Printed T-shirt",
      ratingStars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
      price: "$50.00",
    },
    {
      id: 6,
      image: product6,
      name: "Red Printed T-shirt",
      ratingStars: [
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star-half-o",
        "fa-star-o",
      ],
      price: "$50.00",
    },
    {
      id: 7,
      image: product7,
      name: "Red Printed T-shirt",
      ratingStars: [
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star-half-o",
      ],
      price: "$50.00",
    },
    {
      id: 8,
      image: product8,
      name: "Red Printed T-shirt",
      ratingStars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
      price: "$50.00",
    },
    {
      id: 9,
      image: product9,
      name: "Red Printed T-shirt",
      ratingStars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
      price: "$50.00",
    },
    {
      id: 10,
      image: product10,
      name: "Red Printed T-shirt",
      ratingStars: [
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star-half-o",
        "fa-star-o",
      ],
      price: "$50.00",
    },
    {
      id: 11,
      image: product11,
      name: "Red Printed T-shirt",
      ratingStars: [
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star",
        "fa-star-half-o",
      ],
      price: "$50.00",
    },
    {
      id: 12,
      image: product12,
      name: "Red Printed T-shirt",
      ratingStars: ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star-o"],
      price: "$50.00",
    },
  ];

  // Reusable card template function
  const renderProductCard = (product: Product) => (
    <div key={product.id} className="col-4">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <div className="rating">
        {product.ratingStars.map((starClass, idx) => (
          <i key={idx} className={`fa ${starClass}`}></i>
        ))}
      </div>
      <p>{product.price}</p>
    </div>
  );

  return (
    <>
      {/* Featured Categories */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            {categories.map((category) => (
              <div key={category.id} className="col-3">
                <img src={category.image} alt={`Category ${category.id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Layout */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">{featuredProducts.map(renderProductCard)}</div>

        {/* Latest Products Layout */}
        <h2 className="title">Latest Products</h2>
        <div className="row">
          {latestProducts.slice(0, 4).map(renderProductCard)}
        </div>
        <div className="row">
          {latestProducts.slice(4, 8).map(renderProductCard)}
        </div>
      </div>
    </>
  );
}
