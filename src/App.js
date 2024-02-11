import { useState } from "react";

export default function App() {
    return (
        <div>
            <DateCounter />
        </div>
    );
}

function DateCounter() {
    const [count, setCount] = useState("");
    const [step, setStep] = useState(1);

    const countIncreaseHandler = () => {
        count === "" ? setCount(step) : setCount(count + step);
    };
    const countDecreaseHandler = () => {
        count === "" ? setCount(-step) : setCount(count - step);
    };
    let currentDate = new Date();

    currentDate.setDate(currentDate.getDate() + count);

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Month is 0-indexed
    let year = currentDate.getFullYear();
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let dayOfWeek = daysOfWeek[currentDate.getDay()];
    let dateString = `${dayOfWeek}, ${day}/${month}/${year}`;

    function getMessage() {
        if (count === "") {
            return `Welcome to the date calculator. Today is ${dateString}.`;
        } else if (count === 0) {
            return `Today is ${dateString}.`;
        } else if (count > 0) {
            return `${count} days from today is ${dateString}.`;
        } else {
            return `${Math.abs(count)} days ago was ${dateString}.`;
        }
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                Step: {step}
            </div>
            <div>
                <button onClick={countDecreaseHandler}> Decrease </button>
                <input
                    type="text"
                    placeholder="Enter a number of days:"
                    value={count}
                    onChange={(e) =>
                        setCount(
                            e.target.value === "" ? "" : Number(e.target.value)
                        )
                    }
                />
                <button onClick={countIncreaseHandler}> Increase </button>
            </div>
            <p>{getMessage()}</p>
            {count !== "" || step !== 1 ? (
                <div>
                    <button
                        onClick={() => {
                            setCount("");
                            setStep(1);
                        }}
                    >
                        Reset
                    </button>
                </div>
            ) : null}
        </div>
    );
}
