import React from "react";
import "./InputField.css";
const InputField = ({
  inputType,
  setOnClick,
  setPlaceholder,
  inputTypeOne = false,
  inputTypeTwo = false,
}) => {
  return (
    <>
      {/* {inputTypeOne ? (
        <div className="input-container">
          <input
            type={inputType}
            className="input-type-container"
            placeholder={setPlaceholder}
            onChange={setOnClick}
          />
        </div>
      ) : (
        <div className="input-container-2">
          <input
            type={inputType}
            className="input-type-container-2"
            placeholder={setPlaceholder}
            onChange={setOnClick}
          />
        </div>
      )} */}
{inputTypeOne&&
   <div className="input-container">
   <input
     type={inputType}
     className="input-type-container"
     placeholder={setPlaceholder}
     onChange={setOnClick}
   />
 </div>
}
   
{inputTypeTwo&&
  <div className="input-container-2">
  <input
    type={inputType}
    className="input-type-container-2"
    placeholder={setPlaceholder}
    onChange={setOnClick}
  />
</div>
}
    
    </>
  );
};

export default InputField;
