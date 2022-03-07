import React from "react";

const Prompts = () => {
    return (
        <div className="promptHalf df fdc">
            <div className="secHeader">Quarterly Revenue Goal</div>
            <div className="prompt">
                <div className="promptText">
                    Target Quarterly Billings Goal (Split Adjusted if you share revenue with BD/AM or Recruiter)
                </div>
            </div>
            <div className="secHeader">Calculate: # of Placements Required to Reach Quarterly Goal</div>
            <div className="prompt">
                <div className="promptText">
                    Average Historical Total Fee Per Placement    
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Average Revenue Allocation Per Placement (Split Adjusted)
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Average Historical Revenue Percentage Allocation (Split) Per Placement
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Target # of Placements Required During Quarter (Split Adjusted)
                </div>
            </div>
            <div className="secHeader">Calculate: # of New Req's (Job Order/Searches) Required to Reach Quarterly Goal</div>
            <div className="prompt">
                <div className="promptText">
                    Target Percentage of Placements as The BD (Req. Owner)
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Your Ratio of New Req's : Placements
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Total # of New Req's Required to Achieve Your Quarterly Goal                 
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Target # of New Req's Required per Week
                </div>
            </div>
            <div className="secHeader">Calculate: # of 1st Send Outs (Cand./Client 1st Interview) to Reach Quarterly Goal </div>
            <div className="prompt">
                <div className="promptText">
                    Your Ratio of 1st Send Outs: Placements
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Total # of 1st Send Outs Required to Achieve Your Quarterly Goal
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Target # of 1st Send Outs Required per Week          
                </div>
            </div>
            <div className="secHeader">Calculate: # of Candidate Submissions Required to Reach Quarterly Goal</div>
            <div className="prompt">
                <div className="promptText">
                    Your Ratio: Candidate Subs: 1st Send Outs
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Total # of Candidate Subs Required to Achieve Your Quarterly Goal 
                </div>
            </div>
            <div className="prompt">
                <div className="promptText">
                    Target # of Candidate Subs Required per Week     
                </div>
            </div>
        </div>
        
    )
}

export default Prompts;