import React from "react";
import Fields from "./fields";
import Prompts from "./prompts";

const MainBody = () => {
    return (
        <div className="mainBody darkBlue df fdr">
            <Prompts/>
            <Fields/>
        </div>
    )
}

export default MainBody;