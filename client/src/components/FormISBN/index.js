import React from "react";

function FormISBN({qi, handleInputChange, handleFormSubmit }) {
  return (
    <div>
        <form>
            <div>
                <label>
                    <strong>ISBN</strong>
                </label>
                <div>
                <input
                    className="form-control"
                    id="Title"
                    type="text"
                    value={qi}
                    placeholder=""
                    name="qi"
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

export default FormISBN;