import React from "react";

function Form({name, value, searchType, handleInputChange, handleFormSubmit }) {
    //console.log ("Form name: ", {name}, " value: " , {value});
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
                    //onFocus="this.value=''"
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                    <button
                    onClick={handleFormSubmit}
                    type="submit"
                    name = "searchType"
                    value = { searchType}
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