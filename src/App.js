import Lottery from "./Lottery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Your Numbers" maxBalls={4} maxNum={56} />
    </div>
  );
}

export default App;
