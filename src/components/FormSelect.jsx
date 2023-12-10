import PropTypes from "prop-types";

const FormSelect = ({ name, list, label, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

FormSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  size: PropTypes.string,
  list: PropTypes.array,
};

export default FormSelect;
