import React, {useState, createRef} from "react";
import Fields from "./fields";
import Prompts from "./prompts";
import {useScreenshot, createFileName} from 'use-react-screenshot'

const MainBody = () => {
    const [fieldCount, setFieldCount] = useState([1]);
    const ref = createRef(null);
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });

    const download = (image, { name = "success-metrics-report", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    function addQuarter() {
        let newFieldCount = [...fieldCount, (fieldCount.at(-1) + 1)]
        setFieldCount(newFieldCount);
    }

    function subQuarter() {
        let newFieldCount = fieldCount.slice(0, -1)
        setFieldCount(newFieldCount)
    }

    return (
        <div>
            <button className="screenshot" onClick={downloadScreenshot}>Take Screenshot</button>
            <div className="mainBody darkBlue df fdr" ref={ref}>
                <Prompts/>
                {(fieldCount.length < 4) ? (<button className="addQ" onClick={() => addQuarter()}> + </button>) : null}
                {(fieldCount.length > 1) ? (<button className="subQ" onClick={() => subQuarter()}> - </button>) : null}
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