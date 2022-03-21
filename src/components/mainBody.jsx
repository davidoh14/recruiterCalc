import React, {useState} from "react";
import Fields from "./fields";
import Prompts from "./prompts";

const MainBody = () => {
    const [fieldCount, setFieldCount] = useState([1]);

    function addQuarter() {
        let newFieldCount = [...fieldCount, (fieldCount.at(-1) + 1)]
        setFieldCount(newFieldCount);
    }

    function subQuarter() {
        let newFieldCount = fieldCount.slice(0, -1)
        setFieldCount(newFieldCount)
    }

    return (
        <div className="df fdc">
            <div className="buttons df fdr jcfe">
                <div className="df aic jcc pad">QUARTERS</div>
                <button 
                    className={(fieldCount.length > 1) ? "subQ fdr" : "subQ fdr vh"}
                    onClick={() => subQuarter()}> - 
                </button>
                <button 
                    className={(fieldCount.length < 4) ? "addQ fdr" : "addQ fdr vh"} 
                    onClick={() => addQuarter()}> + 
                </button>
            </div>
            <div className="mainBody darkBlue df fdr">
                <Prompts/>
                <div className="fieldHalf df fdr">
                    {fieldCount.map(count => 
                        <Fields count={count}/>    
                    )}
                </div>
            </div>
        </div>

    )
}

export default MainBody;