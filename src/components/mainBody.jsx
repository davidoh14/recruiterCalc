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
        <div className="mainBody darkBlue df fdr">
            <Prompts/>
            {(fieldCount.length < 4) ? (<button className="addQ" onClick={() => addQuarter()}> + </button>) : null}
            {(fieldCount.length > 1) ? (<button className="subQ" onClick={() => subQuarter()}> - </button>) : null}
            <div className="fieldHalf df fdr">
                {fieldCount.map(count => 
                    <Fields count={count}/>    
                )}
            </div>
        </div>
    )
}

export default MainBody;