import React from "react";

function Form({q,name, value, searchType, handleInputChange, handleFormSubmit }) {
    console.log ("Form name: ", {name}, " value: " , {value});
    return (
    <div>
        <form>
            <div>
                <label>
                    <strong>{ searchType }</strong>
                </label>
                <div>
                <input
                    className="form-control"
                    id= { searchType }
                    type="text"
                    value={ value }
                    placeholder=""
                    name= { name }
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                    <button
                    onClick={handleFormSubmit}
                    type="submit"
                    >
                    Enter
                    </button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Form;