import React, {useState, useEffect} from "react";

const InputField = ({ inputState, inputSetState, placeholder, dataType }) => {
    const [isEditing, setIsEditing] = useState(false);
    const ENTER_KEY = 13;

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const formatter = (number) => {
        switch ( dataType ) {
            case "currency":
                return currencyFormatter.format(number)
            case "percentage":
                return `${number}%`
            case "ratio":
                return `${number}:1`
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
    }, [])
    
    const handleKeyDown = (event) => {
        switch( event.keyCode ) {
            case ENTER_KEY:
                setIsEditing(false);
                break;
            default: 
                break;
        }
    }

    return (
        <div className="field">
            {
                (isEditing === true) ? 
                    <input
                        autoFocus
                        type="number" 
                        className="fieldInput"
                        value={inputState}
                        onChange={(e) => inputSetState(e.target.value)}
                        onBlur={() => setIsEditing(false)}
                        placeholder={placeholder}
                    ></input> 
                    : 
                    <div 
                        className="fieldInputBlur"
                        onClick={() => setIsEditing(true)}
                    >
                        {formatter(inputState)}
                    </div>
            }
        </div>
    )
}

export default InputField;