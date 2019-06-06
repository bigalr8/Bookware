import React from "react";

function FormTitle({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div>
        <form>
            <div>
                <label>
                    <strong>Title</strong>
                </label>
                <div>
                <input
                    className="form-control"
                    id="Title"
                    type="text"
                    value={q}
                    placeholder=""
                    name="q"
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

export default FormTitle;