import { useState } from "react";

export default function App() {
    return (
        <div>
            <DateCounter />
        </div>
    );
}

function DateCounter() {
    // const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const stepIncreaseHandler = () => {
        setStep(step + 1);
    };

    const stepDecreaseHandler = () => {
        step > 1 ? setStep(step - 1) : setStep(1);
    };

    const countIncreaseHandler = () => {
        setCount(count + step);
    };

    const countDecreaseHandler = () => {
        setCount(count - step);
    };

    // Create a new date object for the current date
    let currentDate = new Date();

    // Add the count to the current date
    currentDate.setDate(currentDate.getDate() + count);

    // Format the date to a string
    // let dateString = currentDate.toDateString();

    // Get the day, month, and year from the date object
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Month is 0-indexed
    let year = currentDate.getFullYear();

    // Create a string with the date in the format "day/month/year"
    let dateString = `${day}/${month}/${year}`;

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
                <button onClick={stepDecreaseHandler}>Decrease Step</button>
                Step: {step}
                <button onClick={stepIncreaseHandler}> Increase Step </button>
            </div>
            <div>
                <button onClick={countDecreaseHandler}> Decrease </button>
                Count: {count}
                <button onClick={countIncreaseHandler}> Increase </button>
            </div>
            <p>
                {count} days from today is {dateString}
            </p>
        </div>
    );
}
