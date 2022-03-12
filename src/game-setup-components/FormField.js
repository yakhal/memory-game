import { useState } from "react";

function FormField(props) {
    const [activeButton, setActiveButton] = useState(0);

    const changeValueHandler = (index) => {
        setActiveButton(index);
        props.configure(index);
    }

    return (
        <div className="field">
            <p>{props.fieldLabel}</p>
            <div className="radio-group">
                {props.values.map((value, index) => {
                    return (
                        <button key={Math.random()}
                            className={`radio-button ${activeButton === index && "active-radio-button"}`}
                            onClick={() => { changeValueHandler(index) }}>
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default FormField;