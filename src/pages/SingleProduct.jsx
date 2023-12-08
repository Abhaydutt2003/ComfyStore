import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, generateAmount } from "../utils";
import { useState } from "react";

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { title, price, image, company, colors } = product.attributes;
  const dollarAmount = formatPrice(price);
  //state to handle the color
  const [productColor, setProductColor] = useState(colors[0]);
  //state to handle the amount
  const [amount, setAmount] = useState();
  const handleAmount = (event) => {
    setAmount(parseInt(event.target.value));
  };
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
      </div>
      {/* product */}
      <div className="mt-6 grid gap-y-8 md:grid-cols-2  md:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* product info */}
        <div>
          <h1 className=" capitalize font-bold text-3xl">{title}</h1>
          <h1 className=" mt-2 text-xl text-neutral-content font-bold">
            {company}
          </h1>
          <p className=" mt-2 text-xl">{dollarAmount}</p>
          <p className=" mt-6 leading-8">
            Introducing the {title}, a beacon of medieval-inspired elegance.
            Immerse yourself in the timeless allure of this enchanting piece,
            featuring a wrought-iron base and intricate detailing. Emitting a
            warm, flickering glow reminiscent of candlelight, the Regal Torch
            adds a touch of old-world charm to any space. With its classic
            design and sturdy craftsmanship, this lamp is not just a source of
            light but a statement piece that transports you to a bygone era.
            Illuminate your surroundings with the medieval mystique of the
            {title}.
          </p>
          {/* colors */}
          <div className=" mt-2">
            <h4 className=" capitalize text-md tracking-wide font-medium">
              colors
            </h4>
            <div className="">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color == productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* Amount */}
          <div className=" form-control w-full max-w-xs">
            <label className="label font-medium capitalize">amount</label>
            <select
              value={amount}
              onChange={handleAmount}
              className=" select select-secondary select-bordered select-md"
            >
              {generateAmount(20)}
            </select>
          </div>
          {/* cart button */}
          <div
            className=" mt-10 btn btn-secondary "
            onClick={() => console.log("added to bag")}
          >
            ADD TO BAG
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
