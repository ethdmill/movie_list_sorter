import React, { useState } from 'react'

const App = () => {
  
  const [firstTextArea, setFirstTextArea] = useState("");
  const [secondTextArea, setSecondTextArea] = useState("");
  const [radioButton, setRadioButton] = useState("");
  const [resultList, setResultList] = useState([]);

  // sets state of each text area to current inputs
  const handleTextAreaChange = (area, text) => {
    if (area === "first") {
      setFirstTextArea(text);
    } else if (area === "second") {
      setSecondTextArea(text);
    }
  }

  // compares lists based on currently selected radio button
  const handleCompareLists = (buttonValue, firstList, secondList) => {
    setRadioButton(buttonValue);
   
    // sets everything to lowercase for comparison and converts to an array on line breaks
    firstList = firstTextArea.split("\n");
    secondList = secondTextArea.split("\n");

    let result = [];

    if (buttonValue === "1") {
      // determine if first list is NOT in second list
      for (let i = 0; i < firstList.length; i++) {
        if (!secondList.includes(firstList[i])) {
          result.push(firstList[i]);
        }
      }
      setResultList(result);

    } else if (buttonValue === "2") {
      // determine if second list is NOT in first list
      for (let i = 0; i < secondList.length; i++) {
        if (!firstList.includes(secondList[i])) {
          result.push(secondList[i]);
        }
      }
      setResultList(result);

    } else if (buttonValue === "3") {
      // determine shared items between both lists
      for (let i = 0; i < secondList.length; i++) {
        if (firstList.includes(secondList[i])) {
          result.push(secondList[i]);
        }
      }
      setResultList(result);
    }
  }

  return (
    <>
      <div>
        <p>Select your comparison settings:</p>
        <div>
          <input type="radio" id="firstInSecond" name="list" value="1" checked={radioButton === "1"} onChange={e => handleCompareLists(e.target.value)} />
          <label htmlFor="firstInSecond">in first list, not in second list</label>
        </div>
        <div>
          <input type="radio" id="secondInFirst" name="list" value="2" checked={radioButton === "2"} onChange={e => handleCompareLists(e.target.value)} />
          <label htmlFor="secondInFirst">in second list, not in first list</label>
        </div>
        <div>
          <input type="radio" id="inBoth" name="list" value="3" checked={radioButton === "3"} onChange={e => handleCompareLists(e.target.value)} />
          <label htmlFor="inBoth">in both lists</label>
        </div>
      </div>

      <div>
        <div>
          <textarea placeholder="Enter your first set of movie titles, separated by line breaks" value={firstTextArea} onChange={e => handleTextAreaChange("first", e.target.value)}></textarea>
        </div>
        <div>
          <textarea placeholder="Enter your second set of movie titles, separated by line breaks" value={secondTextArea} onChange={e => handleTextAreaChange("second", e.target.value)}></textarea>
        </div>
      </div>

      <ul>
        {resultList.map((value, index) => 
          <li key={index} style={{ listStyle: "none", padding: "0", margin: "0" }}>{value}</li>
        )}
      </ul>
    </>
  );
}

export default App;
