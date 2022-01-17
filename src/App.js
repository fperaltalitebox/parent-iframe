import logo from "./logo.svg";
import "./App.css";

function App() {
  function handleButtonClick(e) {
    const input = document.getElementById("message")
    document.getElementById("iframe").contentWindow.postMessage(input.value, "*");
    console.log("Button clicked in the frame");
  }

  return (
    <div className="App">
      <input id="message" />
      <button onClick={handleButtonClick}>Send</button>
      <iframe id="iframe" src="http://localhost:3000/d-solo/uGgDky17k/fusebit?orgId=1&from=1642414479747&to=1642436079747&panelId=2&refresh=5s" width="450" height="200" frameborder="0"></iframe> 
    </div>
  );
}

export default App;
