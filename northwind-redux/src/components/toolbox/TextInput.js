import React from "react";
const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  // Saf React'ta propları this.props.changeCategory() şeklinde çağırıyorduk.
  // Hooks'da obje notasyonu ile bize gelmesi gereken bütün propları gönderebiliriz.
  // Kısacası bize üst taraftan veri gelecekse buradakilerle eşleşecektir.
  let wrapperClass = "form-group";
  if (error && error.length > 0) wrapperClass += " has-error"; // bootstrap ile alakalı

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="Field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error&& <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
