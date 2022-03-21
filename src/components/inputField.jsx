import React, {useState, useEffect, useRef} from "react";

const InputField = ({ inputState, inputSetState, placeholder, dataType }) => {
    const [isEditing, setIsEditing] = useState(true);

    const mounted = useRef(null);
    let active = document.activeElement;

    useEffect(() => {
        mounted.current = true;
    }, [])

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

    // useEffect(() => {
    //     document.addEventListener("keydown", handleKeyDown)
    // }, [])

    
    // const handleKeyDown = (event) => {
    //     switch( event.keyCode ) {
    //         case 13:
    //             // setIsEditing(false);
    //             console.log()
    //             break;
    //         default: 
    //             break;
    //     }
    // }

    return (
        <div className="field">
            {
                (isEditing === true) ? 
                    <input
                        autoFocus={mounted.current ? true : false}
                        type="number" 
                        className="fieldInput"
                        value={inputState}
                        onChange={(e) => inputSetState(e.target.value)}
                        onBlur={() => setIsEditing(false)}
                        placeholder={placeholder}
                    ></input> 
                    : 
                    <div 
                        className={(inputState === '') ? "fieldInputBlurEmpty" : "fieldInputBlur"}
                        onClick={() => setIsEditing(true)}
                    >
                        {formatter(inputState)}
                    </div>
            }
        </div>
    )
}

export default InputField;