import React, {useState, useEffect} from "react";
import InputField from "./inputField";

const Fields = ({count}) => {

    const [goal, setGoal] = useState('');
    const [placementFee, setPlacementFee] = useState('');
    const [revenue, setRevenue] = useState('');
    const [revPercentage, setRevPercentage] = useState('');
    const [placementsTarget, setPlacementsTarget] = useState('');
    
    useEffect(() => {
        setRevPercentage((revenue / placementFee * 100).toString() + '%')
    }, [placementFee, revenue])

    useEffect(() => {
        setPlacementsTarget((goal / revenue).toString())
    }, [goal, revenue])

    const [percentagePlacements, setPercentagePlacements] = useState('');
    const [ratioNewReqs, setRatioNewReqs] = useState('');
    const [quarterNewReqs, setQuarterNewReqs] = useState('');
    const [weeklyNewReqs, setWeeklyNewReqs] = useState('');

    useEffect(() => {
        setQuarterNewReqs(placementsTarget * ratioNewReqs * percentagePlacements / 100)
    }, [placementsTarget, ratioNewReqs, percentagePlacements])

    useEffect(() => {
        setWeeklyNewReqs(quarterNewReqs / ratioNewReqs)
    }, [quarterNewReqs, ratioNewReqs])

    const [firstSendRatio, setFirstSendRatio] = useState('');
    const [quarterSendOuts, setQuarterSendOuts] = useState('');
    const [weeklySendOuts, setWeeklySendOuts] = useState('');

    useEffect(() => {
        setQuarterSendOuts(placementsTarget * firstSendRatio)
    }, [placementsTarget, firstSendRatio])

    useEffect(() => {
        setWeeklySendOuts(quarterSendOuts / 13)
    }, [quarterSendOuts])

    
    const [candidateRatio, setCandidateRatio] = useState('');
    const [quarterCandidate, setQuarterCandidate] = useState('');
    const [weeklyCandidate, setWeeklyCandidate] = useState('');

    useEffect(() => {
        setQuarterCandidate(candidateRatio * quarterSendOuts)
    }, [candidateRatio, quarterSendOuts])

    useEffect(() => {
        setWeeklyCandidate(quarterCandidate / 13)
    }, [quarterCandidate])

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="fieldSection df fdc">
            <div className="fieldHeader nobt">{'Q' + `${count}`}</div>
                <div className="field">
                    <InputField 
                        inputState={goal} 
                        inputSetState={setGoal} 
                        placeholder={"$150,000"}
                        dataType={"currency"}
                    />
                </div>
            <div className="fieldHeader">BD/Full Desk or Recruiter Target</div>
                <InputField 
                    inputState={placementFee} 
                    inputSetState={setPlacementFee} 
                    placeholder={"$20,000"}
                    dataType={"currency"}
                />
                <InputField 
                    inputState={revenue} 
                    inputSetState={setRevenue} 
                    placeholder={"$12,000"}
                    dataType={"currency"}
                />
                <output className="field" type="text">
                    {(revPercentage === 'NaN%' || revPercentage === '0%') ? null : revPercentage}
                </output>
                <output className="field" type="text">
                    {(placementsTarget === 'Infinity' || placementsTarget === 'NaN') ? null : placementsTarget}
                </output>
            <div className="fieldHeader">BD/Full Desk Outcome Metric</div>
                <InputField 
                    inputState={percentagePlacements} 
                    inputSetState={setPercentagePlacements} 
                    placeholder={"100%"}
                    dataType={"percentage"}
                />
                <InputField 
                    inputState={ratioNewReqs} 
                    inputSetState={setRatioNewReqs} 
                    placeholder={"4:1"}
                    dataType={"ratio"}
                />
                <output className="field">
                    {isNaN(quarterNewReqs) ? null : quarterNewReqs}
                </output>
                <output className="field">
                    {isNaN(weeklyNewReqs) ? null : weeklyNewReqs}
                </output>
            <div className="fieldHeader">Full Desk or Recruiter Outcome Metric</div>
                <InputField 
                    inputState={firstSendRatio} 
                    inputSetState={setFirstSendRatio} 
                    placeholder={"7:1"}
                    dataType={"ratio"}
                />
                <output className="field">
                    {isNaN(quarterSendOuts) ? null : Math.round((quarterSendOuts) * 100) / 100}
                </output>
                <output className="field">
                    {isNaN(weeklySendOuts) ? null : Math.round((weeklySendOuts) * 100) / 100}
                </output>
            <div className="fieldHeader">Full Desk or Recruiter Activity Metric</div>
                <InputField 
                    inputState={candidateRatio} 
                    inputSetState={setCandidateRatio} 
                    placeholder={"2:1"}
                    dataType={"ratio"}
                />
                <output className="field">
                    {isNaN(quarterCandidate) ? null : Math.round((quarterCandidate) * 100) / 100}
                </output>
                <output className="field">
                    {isNaN(weeklyCandidate) ? null : Math.round((weeklyCandidate) * 100) / 100}
                </output>
        </div>
        
    )
}

export default Fields;