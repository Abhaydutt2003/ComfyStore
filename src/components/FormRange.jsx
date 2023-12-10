import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({label,name,size}) => {
  const [selectedPrice, setSelectedPrice] = useState(100000);
  return (
    <div className=" form-control">
      <label htmlFor={name}className="label cursor-pointer">
        <span className=" lebel-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min="0"
        max="100000"
        value={selectedPrice}
        onChange={(event) => setSelectedPrice(event.target.value)}
        className={`range range-primary ${size}`}
        step="1000"
      ></input>
      <div className="flex justify-between text-xs px-2 mt-2">
        <span className="  font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(100000)}</span>
      </div>
    </div>
  );
};

export default FormRange;
