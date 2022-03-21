import React, {useState, useEffect} from "react";
import InputField from "./inputField";

const Fields = ({count}) => {

    const [goal, setGoal] = useState('');
    const [placementFee, setPlacementFee] = useState('');
    const [revenue, setRevenue] = useState('');
    const [revPercentage, setRevPercentage] = useState('');
    const [placementsTarget, setPlacementsTarget] = useState('');
    
    useEffect(() => {
        if (revenue.length > 1 && placementFee.length > 1) {
            let revPercentageChecked = decimalCheckTwo(revenue/placementFee * 100)
            setRevPercentage((revPercentageChecked).toString() + '%')
        }
    }, [placementFee, revenue])

    useEffect(() => {
        if (goal.length > 1 && revenue.length > 1){
            let placementsTargetChecked = decimalCheckOne(goal/revenue)
            setPlacementsTarget((placementsTargetChecked).toString())
        }
        // setPlacementsTarget((goal / revenue).toString())
    }, [goal, revenue])

    const [percentagePlacements, setPercentagePlacements] = useState('');
    const [ratioNewReqs, setRatioNewReqs] = useState('');
    const [quarterNewReqs, setQuarterNewReqs] = useState('');
    const [weeklyNewReqs, setWeeklyNewReqs] = useState('');

    useEffect(() => {
        // if (placementsTarget.length > 1 && ratioNewReqs.length > 1 && percentagePlacements.length > 1){
            let quarterNewReqsChecked = decimalCheckOne(placementsTarget * ratioNewReqs * percentagePlacements / 100)
            setQuarterNewReqs(quarterNewReqsChecked.toString())
        // }
    }, [placementsTarget, ratioNewReqs, percentagePlacements])

    useEffect(() => {
        // if (quarterNewReqs.length > 1 && ratioNewReqs.length > 1){
            let weeklyNewReqsChecked = decimalCheckOne(quarterNewReqs / ratioNewReqs)
            setWeeklyNewReqs(weeklyNewReqsChecked.toString())
        // }
    }, [quarterNewReqs, ratioNewReqs])

    const [firstSendRatio, setFirstSendRatio] = useState('');
    const [quarterSendOuts, setQuarterSendOuts] = useState('');
    const [weeklySendOuts, setWeeklySendOuts] = useState('');

    useEffect(() => {
        // if (placementsTarget.length > 1 && firstSendRatio.length > 1){
            let quarterSendOutsChecked = decimalCheckOne(placementsTarget * firstSendRatio)
            setQuarterSendOuts(quarterSendOutsChecked.toString())
        // }
    }, [placementsTarget, firstSendRatio])

    useEffect(() => {
        // if (quarterSendOuts.length > 1) {
            let weeklySendOutsChecked = decimalCheckOne(quarterSendOuts / 13)
            setWeeklySendOuts(weeklySendOutsChecked.toString())
        // }
    }, [quarterSendOuts])

    
    const [candidateRatio, setCandidateRatio] = useState('');
    const [quarterCandidate, setQuarterCandidate] = useState('');
    const [weeklyCandidate, setWeeklyCandidate] = useState('');

    useEffect(() => {
        // if (candidateRatio.length > 1 && quarterSendOuts.length > 1 ){
            let quarterCandidatesChecked = decimalCheckOne(candidateRatio * quarterSendOuts)
            setQuarterCandidate(quarterCandidatesChecked.toString())
        // }
    }, [candidateRatio, quarterSendOuts])

    useEffect(() => {
        // if (quarterCandidate.length > 1) {
            let weeklyCandidateChecked = decimalCheckOne(quarterCandidate / 13)
            setWeeklyCandidate(weeklyCandidateChecked.toString())
        // }
    }, [quarterCandidate])

    const decimalCheckOne = (number) => {
        if (!!(number % 1)) {
            return number.round(1)
        } else {
            return number
        }
    }

    const decimalCheckTwo = (number) => {
        // let str = number.toString();
        // let decimals = str.split('.')[1];

        // switch (decimals) {
        //     case (decimals.length > 2):
        //         return number.round(2)
        // }
        if (!!(number % 1)){
            return number.round(2)
        } else {
            return number
        }
    }

    Number.prototype.round = function(n) {
        const d = Math.pow(10, n);
        return Math.round((this + Number.EPSILON) * d) / d;
    }

    return (
        <div className="fieldSection df fdc">
            <div className="fieldHeader nobt">{'Q' + `${count}`}</div>
                <div className="field">
                    <InputField 
                        key={count + 1}                     
                        inputState={goal} 
                        inputSetState={setGoal} 
                        placeholder={"$150,000"}
                        dataType={"currency"}
                    />
                </div>
            <div className="fieldHeader">BD/Full Desk or Recruiter Target</div>
                <InputField 
                    key={count + 2}
                    inputState={placementFee} 
                    inputSetState={setPlacementFee} 
                    placeholder={"$20,000"}
                    dataType={"currency"}
                />
                <InputField 
                    key={count + 3}
                    inputState={revenue} 
                    inputSetState={setRevenue} 
                    placeholder={"$12,000"}
                    dataType={"currency"}
                />
                <div className="field">
                    <output className="fieldOutput" type="text">
                        {(revPercentage === 'NaN%' || revPercentage === '0%') ? null : revPercentage}
                    </output>
                </div>
                <div className="field">
                    <output className="fieldOutput" type="text">
                        {(placementsTarget === 'Infinity' || placementsTarget === 'NaN') ? null : placementsTarget}
                    </output>
                </div>
            <div className="fieldHeader">BD/Full Desk Outcome Metric</div>
                <InputField 
                    key={count + 4}
                    inputState={percentagePlacements} 
                    inputSetState={setPercentagePlacements} 
                    placeholder={"100%"}
                    dataType={"percentage"}
                />
                <InputField 
                    key={count + 5}
                    inputState={ratioNewReqs} 
                    inputSetState={setRatioNewReqs} 
                    placeholder={"4:1"}
                    dataType={"ratio"}
                />
                <div className="field">
                    <output className="fieldOutput">
                        {isNaN(quarterNewReqs) ? null : quarterNewReqs}
                    </output>
                </div>
                <div className="field">
                    <output className="fieldOutput">
                        {isNaN(weeklyNewReqs) ? null : weeklyNewReqs}
                    </output>
                </div>
            <div className="fieldHeader">Full Desk or Recruiter Outcome Metric</div>
                <InputField 
                    key={count + 6}
                    inputState={firstSendRatio} 
                    inputSetState={setFirstSendRatio} 
                    placeholder={"7:1"}
                    dataType={"ratio"}
                />
                <div className="field">
                    <output className="fieldOutput">
                        {isNaN(quarterSendOuts) ? null : Math.round((quarterSendOuts) * 100) / 100}
                    </output>
                </div>
                <div className="field">
                    <output className="fieldOutput">
                        {isNaN(weeklySendOuts) ? null : Math.round((weeklySendOuts) * 100) / 100}
                    </output>
                </div>
            <div className="fieldHeader">Full Desk or Recruiter Activity Metric</div>
                <InputField 
                    key={count + 7}
                    inputState={candidateRatio} 
                    inputSetState={setCandidateRatio} 
                    placeholder={"2:1"}
                    dataType={"ratio"}
                />
                <div className="field">
                    <output className="fieldOutput">
                        {isNaN(quarterCandidate) ? null : Math.round((quarterCandidate) * 100) / 100}
                    </output>
                </div>
                <div className="field">
                    <output className="fieldOutput">
                        {isNaN(weeklyCandidate) ? null : Math.round((weeklyCandidate) * 100) / 100}
                    </output>
                </div>
        </div>
        
    )
}

export default Fields;