import React, { useState } from "react";
import "../Styles/api.css";

const Api = () => {
    const [catFact, setCatFact] = useState({});
    const [hasFetched, setHasFetched] = useState(false);
    const [yesCount, setYesCount] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);
    const [showFact, setShowFact] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            const data = await response.json();
            setCatFact(data);
            setHasFetched(true);
            setShowFact(true);
            setShowQuestion(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const yesClicked = () => {
        setYesCount(yesCount + 1);
        setShowQuestion(false);
        setShowFact(false);
    };

    const noClicked = () => {
        setShowQuestion(false);
        setShowFact(false);
    };

    return (
        <div className="card-main">
            {!showFact && (
                <button className="cat-fact-btn" onClick={fetchData}>Meow's the Time for a Fact</button>
            )}

            {hasFetched && showFact && (
                <p className="cat-fact">{catFact.fact}</p>
            )}

            {hasFetched && (
                <>
                    {showQuestion && (
                        <div className="card-score">
                            <p className="question">Did you know this already?</p>
                            <button className="question-btn" onClick={yesClicked}>Yes</button>
                            <button className="question-btn" onClick={noClicked}>No</button>
                        </div>
                    )}
                    <div className="score-wrapper">
                        <p className="score">Meow Points: {yesCount}</p>
                        {yesCount > 10 && <p className="score pro">...Are you sure you're not secretly a cat in human form?</p>}
                    </div>
                </>
            )}
        </div>
    );
};

export default Api;
