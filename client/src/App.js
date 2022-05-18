import "./App.css";
import { useState } from "react";

function App() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(0);
  const [Country, setCountry] = useState("");
  const [Position, setPosition] = useState("");
  const [Wage, setWage] = useState(0);

 
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage(year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button >Add Employee</button>
      </div>
    </div>
  );
}
export default App;

// <button onClick={displayInfo}>Add Employee</button>