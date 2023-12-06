import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { useState } from "react";

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { title, price, image, company, colors } = product.attributes;
  const dollarAmount = formatPrice(price);
  //state to handle the color
  const [productColor, setProductColor] = useState(colors[0]);
  //state to handle the amount
  const [amount, setAmount] = useState();
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
        {/* product */}
        <div className="">
          {/* image */}
          <img src={image} alt={title} />
          {/* product info */}
          <div>
            <h1>{title}</h1>
            <h1>{company}</h1>
            <p>{dollarAmount}</p>
            <p>
              Introducing the {title}, a beacon of medieval-inspired elegance.
              Immerse yourself in the timeless allure of this enchanting piece,
              featuring a wrought-iron base and intricate detailing. Emitting a
              warm, flickering glow reminiscent of candlelight, the Regal Torch
              adds a touch of old-world charm to any space. With its classic
              design and sturdy craftsmanship, this lamp is not just a source of
              light but a statement piece that transports you to a bygone era.
              Illuminate your surroundings with the medieval mystique of the{" "}
              {title}.
            </p>
            {/* colors */}
            <div>
              <h4>colors</h4>
              <div>
                {colors.map((color) => {
                  return (
                    <button
                      key={color}
                      type="button"
                      style={{ backgroundColor: color }}
                      onClick={() => setProductColor(color)}
                    ></button>
                  );
                })}
              </div>
            </div>
            {/* Amount */}
            <div>
              <label> amount</label>
              <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            {/* cart button */}
            <div onClick={() => console.log("added to bag")}>Add to bag</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
