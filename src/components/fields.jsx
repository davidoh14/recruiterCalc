import React, {useState, useEffect} from "react";

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

    // useEffect(() => {
        // return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(e.target.value)
    // })

    // function dollarFormatter(number) {
    //     let formatter = new Intl.NumberFormat("en-US", {
    //         style: "currency",
    //         currency: "USD"
    //     })

    //     return formatter.format(number)
    // }

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


    return (
        <div className="fieldSection df fdc">
            <div className="fieldHeader">{'Q' + `${count}`}</div>
                <div className="field">
                    <input 
                        type="text" 
                        // value={dollarFormatter(goal)} 
                        value={goal}
                        // onChange={(e) => setGoal(parseInt(e.target.value, 10).toLocaleString('en-US'))} 
                        onChange={(e) => setGoal(e.target.value)}
                        pattern="[0-9]+"
                        data-type="currency" 
                        placeholder="$150,000"
                    ></input>
                </div>
            <div className="fieldHeader">BD/Full Desk or Recruiter Target</div>
                <div className="field">
                    <input 
                        type="number" 
                        value={placementFee} 
                        onChange={(e) => setPlacementFee(e.target.value)} 
                        pattern="[0-9]" 
                        data-type="currency" 
                        placeholder="$20,000"
                    />
                </div>
                <div className="field">
                    <input 
                        type="number" 
                        value={revenue} 
                        onChange={(e) => setRevenue(e.target.value)} 
                        pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" 
                        data-type="currency" 
                        placeholder="$12,000"
                    />
                </div>
                <output className="field" type="text">
                    {(revPercentage === 'NaN%' || revPercentage === '0%') ? null : revPercentage}
                </output>
                <output className="field" type="text">
                    {(placementsTarget === 'Infinity' || placementsTarget === 'NaN') ? null : placementsTarget}
                </output>
            <div className="fieldHeader">BD/Full Desk Outcome Metric</div>
                <div className="field">
                    <input 
                        type="number" 
                        value={percentagePlacements} 
                        placeholder={"100%"}
                        onChange={(e) => setPercentagePlacements(e.target.value)}
                    />
                </div>
                <div className="field">
                    <input 
                        type="number"
                        value={ratioNewReqs}
                        placeholder={"4:1"}
                        onChange={(e) => setRatioNewReqs(e.target.value)}
                    />
                </div>
                <output className="field">
                    {isNaN(quarterNewReqs) ? null : quarterNewReqs}
                </output>
                <output className="field">
                    {isNaN(weeklyNewReqs) ? null : weeklyNewReqs}
                </output>
            <div className="fieldHeader">Full Desk or Recruiter Outcome Metric</div>
                <div className="field">
                    <input 
                        type="number"
                        value={firstSendRatio}
                        placeholder={"7:1"}
                        onChange={(e) => setFirstSendRatio(e.target.value)}
                    ></input>
                </div>
                <output className="field">
                    {isNaN(quarterSendOuts) ? null : quarterSendOuts}
                </output>
                <output className="field">
                    {isNaN(weeklySendOuts) ? null : weeklySendOuts}
                </output>
            <div className="fieldHeader">Full Desk or Recruiter Activity Metric</div>
                <div className="field">
                    <input 
                        type="number"
                        value={candidateRatio}
                        placeholder={"2:1"}
                        onChange={(e) => setCandidateRatio(e.target.value)}
                    ></input>
                </div>
                <output className="field">
                    {isNaN(quarterCandidate) ? null : quarterCandidate}
                </output>
                <output className="field">
                    {isNaN(weeklyCandidate) ? null : weeklyCandidate}
                </output>
        </div>
        
    )
}

export default Fields;