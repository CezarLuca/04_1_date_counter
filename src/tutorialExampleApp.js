import { useState } from "react";

export default function App() {
    return (
        <div>
            <DateCounter />
        </div>
    );
}

function DateCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date("june 21 2077");
    date.setDate(date.getDate() + count);

    // You can use if statements in your React component,
    //  but not directly inside the JSX.
    // If you want to conditionally render some JSX based on a condition,
    //  you can use a ternary operator directly in the JSX,
    //  or you can use an if statement outside of the JSX and
    //  store the result in a variable that you then use in your JSX.
    let messageDisplayed;
    if (count === 0) {
        messageDisplayed = "Today is the day!";
    } else if (count > 0) {
        messageDisplayed = `In ${count} days, the date will be ${date.toDateString()}`;
    } else {
        messageDisplayed = `The date was ${date.toDateString()} ${Math.abs(
            count
        )} days ago`;
    }

    return (
        <div>
            <div>
                <button onClick={() => setStep((s) => s - 1)}>-</button>
                <span>Step: {step}</span>
                <button onClick={() => setStep((s) => s + 1)}>+</button>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}>-</button>
                <span>Count: {count}</span>
                <button onClick={() => setCount((c) => c + step)}>+</button>
            </div>
            <p>
                <span>{messageDisplayed}</span>
            </p>
        </div>
    );
}
