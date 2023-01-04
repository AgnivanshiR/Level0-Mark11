import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [bdayDate, setBdayDate] = useState("");
  var [numLucky, setNumLucky] = useState(0);
  var [result, setResult] = useState();

  // function to calculate the sum of the digits in the birthday
  function calculateSum() {
    console.log(`bdayDate: ${bdayDate}`);
    console.log(`numLucky: ${numLucky}`);
    // replace the "-" and split the birthday string into an array of characters
    //"/-/g" g flag tells the method to replace all instances of the pattern in the string, rather than just the first one.
    var digits = bdayDate.replace(/-/g, "").split("");
    console.log(`digits: ${digits}`);
    // reduce the array of digits to a single sum value
    return digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  function onClickHandler() {
    var sum = calculateSum();
    console.log(`sum: ${sum}`);
    if (sum % numLucky === 0) {
      setResult(`yes, The Number ${numLucky} is lucky for you`);
    } else {
      setResult(
        `oh! Looks like your lucky number ${numLucky} isn't feeling very lucky.`
      );
    }
  }

  return (
    <div className="App">
      <h1>Fortune Teller</h1>
      <h3>
        Is your lucky number living up to its name? Find out with our app!
      </h3>
      <label>
        {" "}
        Birthday:{" "}
        <input
          type="date"
          onChange={(event) => setBdayDate(event.target.value)}
        />
      </label>

      <br />
      <br />
      <label>
        Lucky Number:{" "}
        <input
          type="number"
          onChange={(event) => setNumLucky(event.target.value)}
        />
      </label>
      <br />
      <br />
      <button onClick={onClickHandler}>Lucky??</button>
      <br />
      <br />
      {result}

      <footer>Disclaimer: We aren't saving any of your personal data.</footer>
    </div>
  );
}
