import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/users")
    .then((response) => response.json())
    .then((data) => setData(data));
  }, []);
  
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}
export default App;